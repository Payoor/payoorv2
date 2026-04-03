//const fs = require('fs')
//const axios = require('axios')

// getProducts.js
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

import mongoose from 'mongoose'
import Product from './models/Product.js'
import axios from 'axios';

const MONGO_URL = process.env.MONGO_URL;
const ELASTICSEARCHURL = process.env.ELASTICSEARCHURL;
const INDEX_NAME = 'products';

if (!MONGO_URL) {
  console.error('❌ Missing MONGO_URL in environment');
  process.exit(1);
}

if (!ELASTICSEARCHURL) {
  console.error('❌ Missing ELASTICSEARCHURL in environment');
  process.exit(1);
}

const getAllProducts = async () => {
  try {
    const products = await Product.find().lean();
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

const createProductsIndexIfMissing = async () => {
  try {
    const baseUrl = ELASTICSEARCHURL.replace(/\/+$/, '');

    const existsResponse = await axios.head(`${baseUrl}/${INDEX_NAME}`).catch((err) => {
      if (err.response?.status === 404) return null;
      throw err;
    });

    if (existsResponse) {
      console.log(`ℹ️ Index "${INDEX_NAME}" already exists`);
      return;
    }

    const response = await axios.put(
      `${baseUrl}/${INDEX_NAME}`,
      {
        mappings: {
          properties: {
            _mongooseid: {
              type: 'keyword'
            },
            image: {
              type: 'keyword'
            },
            name: {
              type: 'text',
              analyzer: 'standard',
              fields: {
                keyword: {
                  type: 'keyword'
                }
              }
            },
            generatedDescription: {
              type: 'text',
              analyzer: 'standard'
            },
            generatedCategories: {
              type: 'keyword'
            },
            createdAt: {
              type: 'date'
            },
            updatedAt: {
              type: 'date'
            },
            variantCount: {
              type: 'integer'
            },
            metadata: {
              type: 'text',
              analyzer: 'standard'
            },
            description: {
              type: 'text',
              analyzer: 'standard'
            }
          }
        }
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    console.log(`✅ Created index "${INDEX_NAME}"`, response.data);
  } catch (error) {
    console.error(
      '❌ Error creating index:',
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const normalizeProductForElastic = (product) => {
  return {
    _mongooseid: product._id?.toString(),
    image: product.image || '',
    name: product.name || '',
    generatedDescription: product.generatedDescription || '',
    generatedCategories: Array.isArray(product.generatedCategories)
      ? product.generatedCategories
      : [],
    createdAt: product.createdAt || null,
    updatedAt: product.updatedAt || null,
    variantCount: typeof product.variantCount === 'number' ? product.variantCount : 0,
    metadata: product.metadata || '',
    description: product.description || ''
  };
};

const bulkIndexProducts = async (products) => {
  if (!products.length) {
    console.log('ℹ️ No products found to index');
    return;
  }

  const baseUrl = ELASTICSEARCHURL.replace(/\/+$/, '');

  const bulkLines = [];

  for (const product of products) {
    const doc = normalizeProductForElastic(product);

    bulkLines.push(
      JSON.stringify({
        index: {
          _index: INDEX_NAME,
          _id: doc._mongooseid
        }
      })
    );

    bulkLines.push(JSON.stringify(doc));
  }

  const bulkBody = `${bulkLines.join('\n')}\n`;

  try {
    const response = await axios.post(`${baseUrl}/_bulk`, bulkBody, {
      headers: {
        'Content-Type': 'application/x-ndjson'
      },
      maxBodyLength: Infinity
    });

    if (response.data.errors) {
      const failedItems = response.data.items.filter((item) => item.index?.error);
      console.error(`⚠️ Bulk indexing completed with ${failedItems.length} failed items`);
      console.dir(failedItems.slice(0, 10), { depth: null });
    } else {
      console.log(`✅ Successfully indexed ${products.length} products into "${INDEX_NAME}"`);
    }

    await axios.post(`${baseUrl}/${INDEX_NAME}/_refresh`);
    console.log(`✅ Refreshed "${INDEX_NAME}" index`);
  } catch (error) {
    console.error(
      '❌ Error bulk indexing products:',
      error.response ? error.response.data : error.message
    );
    throw error;
  }
};

const run = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log('✅ MongoDB connected');

    await createProductsIndexIfMissing();

    const products = await getAllProducts();
    console.log(`📦 Found ${products.length} products`);

    await bulkIndexProducts(products);
  } catch (err) {
    console.error('❌ Script failed:', err);
    process.exitCode = 1;
  } finally {
    try {
      await mongoose.connection.close();
      console.log('✅ MongoDB connection closed');
    } catch (closeErr) {
      console.error('⚠️ Error closing MongoDB connection:', closeErr);
    }
  }
};

run();

/*if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
  }

const filePath = __dirname + '/updated_products.json';

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    /*
        If you run the bulk insert again with the same _id, the behavior depends on the operation:

        If using { "index": { ... } }, it replaces the document (overwrites it).

        If using { "create": { ... } }, it will fail if the ID already exists.

        If using { "update": { ... } }, it will update only the specified fields.

    

    try {
        const products = JSON.parse(data);
        
        let bulkPayload = '';

        products.forEach(product => {
            const {_id, __v, ...removeIdField} = product;

            product = {_mongooseid: _id, ...removeIdField}
            bulkPayload += JSON.stringify({ index: { _id: product._mongooseid } }) + '\n';
            bulkPayload += JSON.stringify(product) + '\n';
        });

        axios.post('http://payoorv2-elasticsearch-1:9200/products/_bulk?refresh', bulkPayload, {
            headers: { 'Content-Type': 'application/x-ndjson' }
        })
        .then(response => {
            console.log('Bulk insert response:', response.data);
            response.data.items.forEach((item, idx) => {
                console.log(item)
            });
        })
        .catch(error => {
            console.error('Error in bulk insert:', error.response ? error.response.data : error.message);
        });

    } catch (parseErr) {
        console.error('Error parsing JSON:', parseErr);
    }
});

*/

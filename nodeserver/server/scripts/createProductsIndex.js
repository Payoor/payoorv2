const axios = require('axios');

//"type": "search_as_you_type"

async function createProductsIndex() {
  try {
    const indexName = 'products';

    const response = await axios.put(`http://payoorv2-elasticsearch-1:9200/${indexName}`, {
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
            type: "text",
            analyzer: 'standard'
          }
        }
      }
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Index creation response:', response.data);
  } catch (error) {
    console.error('Error creating index:', error.response ? error.response.data : error.message);
  }
}

createProductsIndex();

const axios = require('axios');

// Creates an index called "metadata" with only the metadata field (search_as_you_type)
async function createMetadataIndex() {
  try {
    const indexName = 'metadata';

    const response = await axios.put(`http://payoorv2-elasticsearch-1:9200/${indexName}`, {
      mappings: {
        properties: {
          metadata: {
            type: 'search_as_you_type',
            analyzer: 'standard'
          }
        }
      }
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    console.log('Metadata index creation response:', response.data);
  } catch (error) {
    console.error('Error creating metadata index:', error.response ? error.response.data : error.message);
  }
}

createMetadataIndex();

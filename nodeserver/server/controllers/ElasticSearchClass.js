const axios = require('axios')

const elasticsearchUrl = process.env.ELASTICSEARCHURL
const productIndex = 'products'

class ElasticSearchClass {
  constructor () {
    this.elasticsearchUrl = elasticsearchUrl
  }

  async autoComplete (queryText) {
    try {
      const response = await axios.post(
        `${this.elasticsearchUrl}/metadata/_search`,
        {
          /*query: {
                    multi_match: {
                        query: queryText,
                        type: 'bool_prefix',
                        fields: [
                            'metadata',
                            'metadata._2gram',
                            'metadata._3gram'
                        ]
                    }
                }*/
          query: {
            match: {
              metadata: {
                query: queryText,
                fuzziness: 'AUTO'
              }
            }
          },
          highlight: {
            fields: {
              metadata: {
                number_of_fragments: 3,
                fragment_size: 30
              }
            }
          }
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      console.log('Autocomplete results:', response.data.hits.hits)

      const hits = response.data.hits.hits

      return hits
    } catch (error) {
      console.error(
        'Error performing autocomplete:',
        error.response ? error.response.data : error.message
      )
    }
  }

  async findProducts ({ query, index, page = 1, size = 10 }) {
    try {
      const from = (page - 1) * size
      const response = await axios.post(
        `${this.elasticsearchUrl}/${index}/_search?filter_path=hits.total,hits.hits._source`,
        {
          from,
          size,
          query: {
            multi_match: {
              query,
              fields: ['name^2', 'metadata']
            }
          }
        }
      )

      return response.data
    } catch (error) {
      console.error('Error performing paginated search:', error)
    }
  }

  async updateProduct ({ mongooseId, variantCount }) {
    try {
      console.log(
        'Updating product:',
        mongooseId,
        '→ variantCount:',
        variantCount
      )

      const response = await axios.post(
        `${this.elasticsearchUrl}/${productIndex}/_update/${mongooseId}`,
        {
          doc: {
            variantCount
          }
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
          // Uncomment if you have security enabled:
          // auth: {
          //   username: 'elastic',
          //   password: 'your_password'
          // }
        }
      )

      console.log('✅ Product updated successfully:', response.data)
      return response.data
    } catch (error) {
      console.error(
        '❌ Error updating product:',
        error.response?.data || error.message
      )
      throw error
    }
  }
}

export default ElasticSearchClass

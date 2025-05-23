const axios = require('axios')

class ElasticSearchClass {
  constructor (elasticsearchUrl) {
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
}

export default ElasticSearchClass

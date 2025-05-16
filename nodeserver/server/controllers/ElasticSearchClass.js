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

  async findProducts ({ query, index }) {
    try {
      return axios
        .post(
          `${this.elasticsearchUrl}/${index}/_search?filter_path=hits.total,hits.hits._source`,
          {
            query: {
              multi_match: {
                query, //"sourdough recipe"
                fields: ['name^2', 'metadata']
              }
            }
          }
        )
        .then(response => {
          return response.data
        })
        .catch(error => {
          console.error('Error performing search:', error)
        })
    } catch (error) {
      console.log(error)
    }
  }
}

export default ElasticSearchClass

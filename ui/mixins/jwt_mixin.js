export default {
  props: ['jwt'],
  data () {
    return {
      loading: false,
      validToken: null,
      excludedPaths: ['/aboutus']
    }
  },
  methods: {
    async getValidToken () {
      try {
        this.validToken = localStorage.getItem('jwt')

        if (this.validToken) {
          return this.validToken
        } else if (!this.excludedPaths.includes(this.$route.path)) {
          this.$router.push({
            path: '/',
            query: {
              ...this.$route.query
            }
          })
        }
      } catch (error) {
        this.loading = false
        console.error(
          'Network or server error during authentication:',
          error.message
        )
      }
    }
  }
}

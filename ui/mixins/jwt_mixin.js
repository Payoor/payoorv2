export default {
  props: ['jwt'],
  data () {
    return {
      loading: false,
      validToken: null,
      excludedPaths: ['/aboutus', '/admin', '/authp', '/admin/checkout']
    }
  },
  methods: {
    async getValidToken () {
      try {
        this.validToken = localStorage.getItem('jwt')

      //  console.log(this.validToken, 'this.validToken')

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

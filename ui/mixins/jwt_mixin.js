export default {
  props: ['jwt'],
  data () {
    return {
      loading: false,
      validToken: null
    }
  },
  methods: {
    async getValidToken () {
      try {
        this.validToken = localStorage.getItem('jwt')

        if (this.validToken) {
          return this.validToken
        } else {
          this.router.push('/')
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

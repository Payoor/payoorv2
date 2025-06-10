export default {
  data () {
    return {
      formerRoute: '/'
    }
  },
  methods: {
    setFormerRoute (route) {
      this.$route.query.backroute = route
    }
  }
}

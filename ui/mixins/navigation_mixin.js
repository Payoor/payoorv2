export default {
  data () {
    return {
      routeStack: ['/']
    }
  },
  methods: {
    goBack () {
      const currentRouteStackQuery = this.$route.query.routeStack

      let routeStackArray = []
      if (currentRouteStackQuery) {
        routeStackArray = currentRouteStackQuery
          .split(',')
          .map(item => item.trim())
          .filter(item => item !== '')
      }

      let targetPath = '/'

      if (routeStackArray.length >= 2) {
        targetPath = routeStackArray[routeStackArray.length - 2]
      } else if (routeStackArray.length === 1) {
        targetPath = routeStackArray[0]
      }

      const newRouteStack = routeStackArray.slice(0, -1)

      this.$router.push({
        path: targetPath,
        query: {
          ...this.$route.query,
          routeStack: newRouteStack.join(',')
        }
      })
    }
  }
}

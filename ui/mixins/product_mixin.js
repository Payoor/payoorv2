import { serverurl, handleFetchError } from '@/api'

export default {
  props: {
    setLoading: Function
  },
  data () {
    return {
      products: []
    }
  },
  emits: ['update:products', 'update:replyuser'],
  methods: {
    async postMessageFromQuery (message) {
      const token = localStorage.getItem('jwt')

      if (this.setLoading) this.setLoading(true) // 👉 Start loading

      try {
        const response = await fetch(`${serverurl}/shopper/message`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Origin: window.location.origin,
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'Content-Type'
          },
          body: JSON.stringify({ message })
        })

        await handleFetchError(response);

        if (response.status === 200 || response.status === 201) {
          const data = await response.json()
          const { products } = data

          this.$emit('update:products', [...this.products, ...products])
        }
      } catch (error) {
        console.log(error)
      } finally {
        if (this.setLoading) this.setLoading(false) // 👉 End loading
      }
    }
  }
}

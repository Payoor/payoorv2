import { handleFetch } from '@/api'

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
      if (this.setLoading) this.setLoading(true) 

      try {
        const data = await handleFetch({
          apiroute: 'shopper/message',
          method: 'POST',
          body: { message }
        })

        const { products } = data
        this.$emit('update:products', [...this.products, ...products])
      } catch (error) {
        console.error('Error posting message:', error)
      } finally {
        if (this.setLoading) this.setLoading(false)
      }
    }
  }
}

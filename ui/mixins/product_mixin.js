import { serverurl } from '@/api'

export default {
  data () {
    return {
      products: []
    }
  },
  emits: ['update:products'],
  methods: {
    async postMessageFromQuery (message) {
      const token = localStorage.getItem('jwt')

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

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        if (response.status === 200 || response.status === 201) {
          const data = await response.json()
          const { products } = data

          this.$emit('update:products', [...this.products, ...products])
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}

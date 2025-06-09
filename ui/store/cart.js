import { serverurl } from '@/api'

export const state = () => ({
  items: {},
  total: 0,
  totalItems: []
})

export const mutations = {
  ADD_ITEM (state, { id, quantity, price }) {
    state.items[id] = quantity

    const total = state.total

    const updatedTotal = total + price

    state.total = updatedTotal

    const totalItems = [...state.totalItems, id]

    const uniqueArray = [...new Set(totalItems)]

    state.totalItems = uniqueArray
  },

  REMOVE_ITEM (state, { id, quantity, price }) {
    if (quantity === 0) {
      state.totalItems = state.totalItems.filter(itemId => itemId !== id)

      const { [id]: removed, ...updatedItems } = state.items
      state.items = updatedItems
    } else {
      state.items[id] = quantity
    }

    state.total = Math.max(0, state.total - price)

    console.log('state.total', state.total, state.items)
  },

  SET_CART_STATE (state, { items, total, totalItems }) {
    state.items = items
    state.total = total
    state.totalItems = totalItems
  },

  RESET_CART_STATE (state) {
    state.items = {}
    state.total = 0
    state.totalItems = []
  }
}

export const actions = {
  addItem ({ commit }, payload) {
    const { id, quantity, price } = payload

    console.log(id, quantity, price)

    commit('ADD_ITEM', { id, quantity, price })
  },

  removeItem ({ commit }, payload) {
    const { id, quantity, price } = payload

    commit('REMOVE_ITEM', { id, quantity, price })
  },

  initializeCart ({ commit }) {
    try {
      const items = JSON.parse(localStorage.getItem('cartItems') || '{}')
      const total = JSON.parse(localStorage.getItem('cartTotal') || '0')
      const totalItems = Object.keys(items)

      commit('SET_CART_STATE', { items, total, totalItems })
    } catch (error) {
      console.error('Failed to initialize cart from localStorage:', error)
    }
  },

  resetCart ({ commit }) {
    commit('RESET_CART_STATE')

    try {
      localStorage.removeItem('cartItems')
      localStorage.removeItem('cartTotal')
      localStorage.removeItem('cartLength')
    } catch (err) {
      console.error('Failed to clear cart from localStorage:', err)
    }
  },

  async syncCartToServer ({ state, commit }) {
    try {
      const token = localStorage.getItem('jwt')

      const response = await fetch(`${serverurl}/shopper/cart`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Origin: window.location.origin,
          'Access-Control-Request-Method': 'POST',
          'Access-Control-Request-Headers': 'Content-Type'
        },
        body: JSON.stringify({
          items: state.items,
          totalItems: state.totalItems
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error('Error response:', errorData)
        throw new Error(`Request failed with status ${response.status}`)
      }

      const data = await response.json()

      const { user_cart } = data
      const { items, totalItems } = user_cart

      //commit('SET_CART_STATE', { items, total, totalItems })

      console.log(data)
    } catch (error) {
      console.error('Failed to sync cart from localStorage to server:', error)
    }
  }
}

//this.$store.dispatch("cart/updateTotal", cartTotal);

//this.$store.dispatch("cart/updateTotal", cartTotal);

import { serverurl, handleFetchError } from '@/api'

export const state = () => ({
  items: {},
  total: 0,
  totalItems: []
})

export const mutations = {
  ADD_ITEM (state, { id, quantity, price }) {
    const prevQuantity = state.items[id] || 0
    const delta = quantity - prevQuantity

    state.items[id] = quantity
    state.total = state.total + price * delta

    const totalItems = [...state.totalItems, id]
    state.totalItems = [...new Set(totalItems)]
  },

  REMOVE_ITEM (state, { id, quantity, price }) {
    const prevQuantity = state.items[id] || 0

    if (quantity === 0) {
      state.totalItems = state.totalItems.filter(itemId => itemId !== id)

      const { [id]: removed, ...updatedItems } = state.items
      state.items = updatedItems

      state.total = Math.max(0, state.total - price * prevQuantity)
    } else {
      const delta = (state.items[id] || 0) - quantity
      state.items[id] = quantity
      state.total = Math.max(0, state.total - price * delta)
    }

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

    commit('ADD_ITEM', { id, quantity, price })
  },

  removeItem ({ commit }, payload) {
    const { id, quantity, price } = payload

    commit('REMOVE_ITEM', { id, quantity, price })
  },

  async initializeCart ({ commit }) {
    try {
      const storedItems = localStorage.getItem('cartItems')
      const storedTotal = localStorage.getItem('cartTotal')

      const hasAnyLocalCartData = storedItems !== null && storedTotal !== null

      if (hasAnyLocalCartData) {
        const localItems = JSON.parse(storedItems || '{}')
        const localTotal = JSON.parse(storedTotal || '0')
        const localTotalItems = Object.keys(localItems)

        commit('SET_CART_STATE', {
          items: localItems,
          total: localTotal,
          totalItems: localTotalItems
        })
        return
      }
    } catch (e) {
      console.warn(
        'Failed to load cart from localStorage due to parsing error, falling back to server:',
        e
      )
    }

    try {
      const token = localStorage.getItem('jwt')

      const response = await fetch(`${serverurl}/shopper/initialize`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })

      await handleFetchError(response);

      const data = await response.json()
      const { user_cart, total } = data

      const items = user_cart.items || {}
      const totalItems = user_cart.totalItems || []

      commit('SET_CART_STATE', { items, total, totalItems })

      localStorage.setItem('cartItems', JSON.stringify(items))
      localStorage.setItem('cartTotal', JSON.stringify(total))
    } catch (error) {
      console.error('Failed to initialize cart from backend:', error)
      commit('SET_CART_STATE', { items: {}, total: 0, totalItems: [] })
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
      const hasItemsToSync = Object.keys(state.items || {}).length > 0

      if (!hasItemsToSync) {
        console.log('No items to sync — skipping server call.')
        return
      }

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

      await handleFetchError(response)

      const data = await response.json()
      const { user_cart, total } = data
      const { items, totalItems } = user_cart

      commit('SET_CART_STATE', { items, total, totalItems })

      console.log('Cart synced successfully:', data)
    } catch (error) {
      console.error('Failed to sync cart from localStorage to server:', error)
    }
  }
}

//this.$store.dispatch("cart/updateTotal", cartTotal);

//this.$store.dispatch("cart/updateTotal", cartTotal);

import { serverurl, handleFetchError, handleFetch } from '@/api'

export const state = () => ({
  items: {},
  total: 0,
  totalItems: [],
  checkout: null,
  payoorDBInstance: null
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

   // console.log('state.total', state.total, state.items)
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
  },

  SET_CHECKOUT (state, checkout) {
    state.checkout = checkout
  },

  RESET_CHECKOUT (state) {
    state.checkout = null
  },

  SET_PAYOOR_DB_INSTANCE (state, dbInstance) {
    state.payoorDBInstance = dbInstance

   // console.log(state.payoorDBInstance, 'state.payoorDBInstance')
  }
}

export const actions = {
  /*async addItem ({ commit }, payload) {
    const { id, quantity, price } = payload

    await commit('ADD_ITEM', { id, quantity, price });
  },*/

  async addItemAndPersist ({ state, commit, dispatch }, payload) {
    const { id, quantity, price } = payload

    commit('ADD_ITEM', { id, quantity, price })

    const itemToPersist = {
      id: id,
      quantity: state.items[id],
      price: price
    }

    try {
      await dispatch('putCartItem', itemToPersist)
    } catch (error) {
      console.error('Failed to persist item to IndexedDB:', error)
    }
  },

  removeItem ({ commit }, payload) {
    const { id, quantity, price } = payload

    commit('REMOVE_ITEM', { id, quantity, price })
  },

  async removeItemAndPersist ({ state, commit, dispatch }, payload) {
    const { id, quantity, price } = payload

    const oldQuantity = state.items[id] || 0

    commit('REMOVE_ITEM', { id, quantity, price })

    const newQuantity = state.items[id]

   // console.log(newQuantity, typeof newQuantity)

    try {
      if (newQuantity === undefined || newQuantity === 0) {
        await dispatch('deleteCartItem', id)
      } else {
        await dispatch('putCartItem', {
          id: id,
          quantity: newQuantity,
          price: price
        })
      }
    } catch (error) {
      console.error(
        'Failed to persist item removal/update to IndexedDB:',
        error
      )
      commit('ADD_ITEM', { id, quantity: oldQuantity, price })
    }
  },

  async clearAllCartItems ({ state, dispatch, commit }) {
    if (!state.payoorDBInstance) {
      console.warn('IndexedDB database instance not ready. Cannot clear cart.')
      throw new Error('IndexedDB not initialized or ready.')
    }
    const db = state.payoorDBInstance
    const transaction = db.transaction(['payoor_cart'], 'readwrite')
    const store = transaction.objectStore('payoor_cart')

    return new Promise((resolve, reject) => {
      const request = store.clear()
      request.onsuccess = () => {
        //console.log('All items cleared from IndexedDB.')
        dispatch('resetCart') // Reset Vuex state as well
        resolve()
      }
      request.onerror = () => {
        console.error('Error clearing all items from IndexedDB:', request.error)
        reject(request.error)
      }
    })
  },

  async deleteCartItem ({ state }, id) {
    if (!state.payoorDBInstance) {
      console.warn('IndexedDB database instance not ready. Cannot delete item.')
      return
    }
    const db = state.payoorDBInstance
    const transaction = db.transaction(['payoor_cart'], 'readwrite')
    const store = transaction.objectStore('payoor_cart')

    return new Promise((resolve, reject) => {
      const request = store.delete(id)
      request.onsuccess = () => {
       // console.log('Item deleted from IndexedDB successfully:', id)
        resolve()
      }
      request.onerror = () => {
        console.error('Error deleting item from IndexedDB:', request.error)
        reject(request.error)
      }
    })
  },

  async loadCartFromIndexedDB ({ commit, dispatch, state }) {
    // Check if DB is already initialized. If not, dispatch the initialization and await it.
    if (!state.payoorDBInstance) {
     // console.log('IndexedDB instance not yet available. Initializing...')
      try {
        await dispatch('initializePayoorDB')
      //  console.log('IndexedDB initialized, proceeding to load cart.')
      } catch (error) {
        console.error('Failed to initialize IndexedDB:', error)
        // If initialization fails, we cannot proceed with loading from DB.
        // This error will be handled by the outer try-catch in initializeCart.
        throw error // Re-throw to propagate the failure.
      }
    }

    // After awaiting, state.payoorDBInstance should now be available if initialization was successful.
    if (!state.payoorDBInstance) {
      console.error(
        'IndexedDB instance still not available after initialization attempt. This should not happen if initializePayoorDB resolves correctly.'
      )
      return // Cannot proceed without DB
    }

    const db = state.payoorDBInstance
    const transaction = db.transaction(['payoor_cart'], 'readonly')
    const store = transaction.objectStore('payoor_cart')

    return new Promise((resolve, reject) => {
      const request = store.getAll()
      request.onsuccess = () => {
        const itemsFromDB = request.result
        const items = {}
        let total = 0
        const totalItems = []

        itemsFromDB.forEach(item => {
          items[item.id] = item.quantity
          total += item.price * item.quantity
          totalItems.push(item.id)
        })

        commit('SET_CART_STATE', {
          items: items,
          total: total,
          totalItems: [...new Set(totalItems)] // Ensure unique IDs
        })
       // console.log('Cart loaded from IndexedDB:', itemsFromDB)
        resolve(itemsFromDB)
      }
      request.onerror = () => {
        console.error('Error loading cart from IndexedDB:', request.error)
        reject(request.error)
      }
    })
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
     // console.log('call handleFetch')
      const data = await handleFetch({
        apiroute: 'shopper/initialize',
        method: 'GET'
      })

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

  async resetCart ({ commit, state }) {
    if (localStorage.getItem('cartResetPerformed')) {
      //return
    }

    commit('RESET_CART_STATE')

    try {
      localStorage.setItem('cartResetPerformed', 'true')
      localStorage.removeItem('cartItems')
      localStorage.removeItem('cartTotal')
      localStorage.removeItem('cartLength')
      //console.log('Cart successfully reset and flag set.')
    } catch (err) {
      console.error('Failed to clear cart from localStorage:', err)
    }
  },

  async syncCartToServer ({ state, commit }) {
    try {
      const hasItemsToSync = Object.keys(state.items || {}).length > 0

      if (!hasItemsToSync) {
      //  console.log('No items to sync — skipping server call.')
        return
      }

      const data = await handleFetch({
        apiroute: 'shopper/cart',
        method: 'POST',
        body: {
          items: state.items,
          totalItems: state.totalItems
        }
      })

      const { user_cart, total } = data
      const { items, totalItems } = user_cart

      commit('SET_CART_STATE', { items, total, totalItems })

    //  console.log('Cart synced successfully:', data)
    } catch (error) {
      console.error('Failed to sync cart from localStorage to server:', error)
    }
  },

  async createCheckout ({ commit, state }) {
    try {
      const data = await handleFetch({
        apiroute: 'shopper/checkout/create',
        method: 'POST',
        body: {
          items: state.items
        }
      })

      const { checkout } = data

    //  console.log(checkout)
      commit('SET_CHECKOUT', checkout)
    } catch (error) {
      console.error('Failed to create checkout:', error)
    }
  },

  async getCheckOutData ({ commit, state }, checkout_id) {
    try {
      const data = await handleFetch({
        apiroute: 'shopper/checkout/get',
        method: 'GET',
        queries: { checkout_id }
      })

      const { checkout } = data

    //  console.log(checkout, 'getCheckOutData')
      commit('SET_CHECKOUT', checkout)
    } catch (error) {
      console.error('Error fetching checkout data:', error)
    }
  },

  async applyPromoCode ({ commit, state }, { code, checkout_id }) {
    try {
      if (!checkout_id) {
        console.error('Checkout ID is missing.')
        return
      }

      const data = await handleFetch({
        apiroute: 'shopper/apply-coupon',
        method: 'POST',
        queries: { checkout_id },
        body: { coupon_code: code }
      })

      if (data.success) {
        const { updatedCheckout } = data
     //   console.log(updatedCheckout, 'applyPromoCode success')
        commit('SET_CHECKOUT', updatedCheckout)
      } else {
        console.error(
          'Failed to apply coupon:',
          data.userMessage || 'Unknown error.'
        )
      }
    } catch (error) {
      console.error('Error applying promo code:', error)
    }
  },

  /*async initializePayoorDB ({ commit }) {
    const PAYOOR_DB = 'PAYOOR_DB'
    const DB_VERSION = 1

    const request = indexedDB.open(PAYOOR_DB, DB_VERSION)

    request.onupgradeneeded = function (event) {
      const db = event.target.result

      if (!db.objectStoreNames.contains('payoor_cart')) {
        db.createObjectStore('payoor_cart', { keyPath: 'id' })
        console.log('Object store "payoor_cart" created.')
      }
    }

    request.onsuccess = function (event) {
      const dbInstance = event.target.result

      commit('SET_PAYOOR_DB_INSTANCE', dbInstance)
    }

    request.onerror = function (event) {
      /*const errorReport = {
        message: error.message,
        name: error.name,
        code: event.target.errorCode,
        userAgent: navigator.userAgent, // Browser and OS details
        timestamp: new Date().toISOString(),
        // Potentially more context like current page, user ID (if authenticated)
      };
      //might need to send a report to our server here as well as browser version of client
    }
  },*/

  async initializePayoorDB ({ commit }) {
    const PAYOOR_DB = 'PAYOOR_DB';
    const DB_VERSION = 2

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(PAYOOR_DB, DB_VERSION)

      request.onupgradeneeded = function (event) {
        const db = event.target.result
        if (!db.objectStoreNames.contains('payoor_cart')) {
          
          db.createObjectStore('payoor_cart', { keyPath: 'id' })
        /*  console.log(
            'IndexedDB object store "payoor_cart" created/upgraded successfully.'
          )*/
        }
      }

      // onsuccess: This event fires when the database is successfully opened
      // (either after creation/upgrade or just a regular open).
      request.onsuccess = function (event) {
        // The `dbInstance` is the actual IDBDatabase object, which is your connection
        // to the IndexedDB.
        const dbInstance = event.target.result
      //  console.log('IndexedDB database "PAYOOR_DB" opened successfully.')

        // Commit the database instance to the Vuex state.
        commit('SET_PAYOOR_DB_INSTANCE', dbInstance)
        resolve(dbInstance) // Resolve the promise with the DB instance
      }

      // onerror: This event fires if there's any error during the database opening process.
      request.onerror = function (event) {
        const error = event.target.error
        console.error(
          'IndexedDB error:',
          error.name,
          error.message,
          event.target.errorCode
        )

        // Commit the error to the Vuex state for potential UI display or logging
        commit('SET_DB_ERROR', error)

        const errorReport = {
          message: error.message,
          name: error.name,
          code: event.target.errorCode,
          userAgent: navigator.userAgent, // Browser and OS details
          timestamp: new Date().toISOString()
        }

        console.warn('Simulating sending error report to server:', errorReport)
        reject(error)
      }
    })
  },

  async putCartItem ({ state, commit }, item) {
    if (!state.payoorDBInstance) {
      console.warn('IndexedDB database instance not ready. Cannot put item.')
      return
    }

    const db = state.payoorDBInstance

    const transaction = db.transaction(['payoor_cart'], 'readwrite')
    const store = transaction.objectStore('payoor_cart')

    return new Promise((resolve, reject) => {
      const request = store.put(item)

      request.onsuccess = () => {
     //   console.log('Item added/updated in IndexedDB successfully:', item)
        resolve(request.result)
      }

      request.onerror = () => {
        console.error('Error adding/updating item in IndexedDB:', request.error)
        reject(request.error)
      }
    })
  }
}

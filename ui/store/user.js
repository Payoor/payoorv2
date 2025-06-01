import { serverurl } from '@/api'

export const state = () => ({
  currentUser: {},
  loading: false
})

export const mutations = {
  SET_CURRENT_USER (state, user) {
    state.currentUser = user
  },

  REMOVE_CURRENT_USER (state) {
    state.currentUser = {}
  },

  SET_USER_NAME (state, name) {
    state.currentUser = {
      ...state.currentUser,
      name
    }
  },

  SET_USER_PHONE_NUMBER (state, phoneNumber) {
    state.currentUser = {
      ...state.currentUser,
      phoneNumber
    }
  },

  SET_USER_DETAILS_ADDED (state, status) {
    state.currentUser = {
      ...state.currentUser,
      detailsAdded: status
    }
  },

  SET_LOADING (state, status) {
    state.loading = status
  }
}

export const actions = {
  addCurrentUser ({ commit }, payload) {
    commit('SET_CURRENT_USER', payload)
  },

  removeCurrentUser ({ commit }) {
    commit('REMOVE_CURRENT_USER')
  },

  async setUserName ({ commit, dispatch }, name) {
    commit('SET_USER_NAME', name)
    await dispatch('updateUserDetails')
  },

  setUserPhoneNumber ({ commit }, phoneNumber) {
    commit('SET_USER_PHONE_NUMBER', phoneNumber)
  },

  async updateUserDetails ({ state, commit }) {
    try {
      commit('SET_LOADING', true)

      const token = localStorage.getItem('jwt')

      const response = await fetch(`${serverurl}/shopper/auth/updatedetails`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
          Origin: window.location.origin,
          'Access-Control-Request-Method': 'POST',
          'Access-Control-Request-Headers': 'Content-Type'
        },
        body: JSON.stringify({
          name: state.currentUser.name,
          phoneNumber: state.currentUser.phoneNumber
        })
      })

      if (!response.ok) {
        const errorData = await response.json()
        console.error('Error response:', errorData)
        throw new Error(`Request failed with status ${response.status}`)
      }

      const data = await response.json()
      const { user } = data

      if (user.name) {
        commit('SET_USER_NAME', user.name)
      }

      if (user.phoneNumber) {
        commit('SET_USER_PHONE_NUMBER', user.phoneNumber)
      }

      commit('SET_USER_DETAILS_ADDED', true)

      return data
    } catch (error) {
      console.error('Error updating user details:', error)
      throw error
    } finally {
      commit('SET_LOADING', false)
    }
  }
}

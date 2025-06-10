import { serverurl } from '@/api'

export const state = () => ({
  currentUser: {
    otpMode: false
    //name: '',
    //phoneNumber: '',
    //email: ''
  },
  loading: false,
  jwtToken: null,
  currentRoute: null,
  previousRoute: null
})

export const mutations = {
  SET_CURRENT_USER (state, user) {
    state.currentUser = user

    console.log(state.currentUser, 'state.current User')
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

  SET_USER_EMAIL (state, email) {
    state.currentUser = {
      ...state.currentUser,
      email
    }
  },

  SET_USER_DETAILS_ADDED (state, status) {
    state.currentUser = {
      ...state.currentUser,
      detailsAdded: status
    }
  },

  SET_OTP_MODE (state, otpMode) {
    state.currentUser = {
      ...state.currentUser,
      otpMode
    }
  },

  SET_LOADING (state, status) {
    state.loading = status
  },

  SET_JWT_TOKEN (state, token) {
    state.jwtToken = token
  },

  REMOVE_JWT_TOKEN (state) {
    state.jwtToken = null
  },

  SET_CURRENT_ROUTE (state, route) {
    state.currentRoute = route
  },

  SET_PREVIOUS_ROUTE (state, route) {
    state.previousRoute = route
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

  setLoading ({ commit }, status) {
    commit('SET_LOADING', status) // Commit the loading state change
  },

  setUserPhoneNumber ({ commit }, phoneNumber) {
    commit('SET_USER_PHONE_NUMBER', phoneNumber)
  },

  async updateUserPhoneNumber ({ commit }, phoneNumber) {
    commit('SET_LOADING', true)

    try {
      const token = localStorage.getItem('jwt')

      const response = await fetch(
        `${serverurl}/shopper/auth/updatedetails/phonenumber`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Origin: window.location.origin,
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'Content-Type'
          },
          body: JSON.stringify({
            phoneNumber
          })
        }
      )

      commit('SET_LOADING', false)

      if (!response.ok) {
        const errorData = await response.json()
        console.error('Error response:', errorData)

        const error = new Error(
          `Request failed with status ${response.status}: ${
            errorData.userMessage || 'Unknown error'
          }`
        )

        error.status = response.status
        error.message = errorData.userMessage
        throw error
      }

      const data = await response.json()
      const { user } = data

      if (user.phoneNumber) {
        commit('SET_USER_PHONE_NUMBER', user.phoneNumber)
      }

      if (user.email) {
        commit('SET_USER_EMAIL', user.email)
      }

      return data
    } catch (error) {
      commit('SET_LOADING', false)
      console.error('Error during phone number update:', error)
      throw error
    }
  },

  async updateUserName ({ commit }, name) {
    commit('SET_LOADING', true)

    try {
      const token = localStorage.getItem('jwt')

      const response = await fetch(
        `${serverurl}/shopper/auth/updatedetails/name`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Origin: window.location.origin,
            'Access-Control-Request-Method': 'POST',
            'Access-Control-Request-Headers': 'Content-Type'
          },
          body: JSON.stringify({
            name
          })
        }
      )

      commit('SET_LOADING', false)

      if (!response.ok) {
        const errorData = await response.json()
        console.error('Error response:', errorData)

        const error = new Error(
          `Request failed with status ${response.status}: ${
            errorData.userMessage || 'Unknown error'
          }`
        )

        error.status = response.status
        error.message = errorData.userMessage
        throw error
      }

      const data = await response.json()
      const { user } = data

      if (user.name) {
        commit('SET_USER_NAME', user.name)
      }

      if (user.phoneNumber) {
        commit('SET_USER_PHONE_NUMBER', user.phoneNumber)
      }

      if (user.email) {
        commit('SET_USER_EMAIL', user.email)
      }

      commit('SET_USER_DETAILS_ADDED', true)

      return data
    } catch (error) {
      commit('SET_LOADING', false)
      console.error('Error during phone number update:', error)
      throw error
    }
  },

  setOtpMode ({ commit }, otpMode) {
    commit('SET_OTP_MODE', otpMode)
  },

  setUserEmail ({ commit }, email) {
    commit('SET_USER_EMAIL', email)
  },

  setJwtToken ({ commit }, token) {
    localStorage.setItem('jwt', token)
    commit('SET_JWT_TOKEN', token)
  },

  removeJwtToken ({ commit }) {
    localStorage.removeItem('jwt')
    commit('REMOVE_JWT_TOKEN')
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
          phoneNumber: state.currentUser.phoneNumber,
          email: state.currentUser.email
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

      if (user.email) {
        commit('SET_USER_EMAIL', user.email)
      }

      commit('SET_USER_DETAILS_ADDED', true)

      return data
    } catch (error) {
      console.error('Error updating user details:', error)
      throw error
    } finally {
      commit('SET_LOADING', false)
    }
  },

  trackRouteChange ({ state, commit }, newRoute) {
    if (state.currentRoute !== newRoute) {
      commit('SET_PREVIOUS_ROUTE', state.currentRoute)
      commit('SET_CURRENT_ROUTE', newRoute)
    }
  }
}

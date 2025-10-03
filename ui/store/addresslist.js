export const state = () => ({
  addressesList: [],
  loadingAddresses: false,
  query: '',
  deliveryAddress: null,
  checkoutInput: null
})

export const mutations = {
  SET_CHECKOUT_INPUT_AND_DELIVERY_ADDRESS (
    state,
    { checkout_input_key, formatted_address }
  ) {
    state.checkoutInput = checkout_input_key
    state.deliveryAddress = formatted_address

   //console.log(state.deliveryAddress, 'newVal')
  }
}

export const actions = {
  setAddressDetails ({ commit }, { formatted_address, checkout_input }) {
    //console.log(formatted_address, checkout_input)
    commit('SET_CHECKOUT_INPUT_AND_DELIVERY_ADDRESS', {
      checkoutInput: checkout_input,
      formatted_address: formatted_address
    })
  }
}

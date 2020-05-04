const ADD_TO_CART = 'ADD_TO_CART'

export const state = () => ({
  cart: []
})

export const actions = {
  addToCart ({ commit }, item) {
    commit('ADD_TO_CART', item)
  }
}

export const mutations = {
  [ADD_TO_CART]: (state, item) => {
    state.cart.push(item)
  }
}

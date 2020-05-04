const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART'

export const state = () => ({
  cart: []
})

export const actions = {
  addToCart ({ commit }, item) {
    commit('ADD_TO_CART', item)
  },
  removeItemFromCart ({ commit }, item) {
    commit('REMOVE_ITEM_FROM_CART', item)
  }
}

export const mutations = {
  [ADD_TO_CART]: (state, item) => {
    state.cart.push(item)
  },
  [REMOVE_ITEM_FROM_CART]: (state, item) => {
    state.cart = state.cart.filter(i => i.id !== item.id)
  }
}

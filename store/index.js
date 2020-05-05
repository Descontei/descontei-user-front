const ADD_TO_CART = 'ADD_TO_CART'
const REMOVE_ITEM_FROM_CART = 'REMOVE_ITEM_FROM_CART'

export const state = () => ({
  cart: [{ image: 'japa.jpg', title: 'Adicionar Japonês ao carrinho', description: 'Sushis, Temakis, Chás', discount: 12, price: 40, id: 456, body: 'Sushis, Temakis, Chás', onDone: { _custom: { type: 'function', display: '<span>ƒ</span> onDone(item)' } } }, { image: 'bread.jpg', title: 'Adicionar Padarias ao carrinho', description: 'Pães, cafés, tortas', discount: 16, price: 10, id: 123, body: 'Pães, cafés, tortas', onDone: { _custom: { type: 'function', display: '<span>ƒ</span> onDone(item)' } } }, { image: 'sweet.jpg', title: 'Adicionar Docêrias ao carrinho', description: 'Sorvetes, Bolos', discount: 10, price: 10, id: 678, body: 'Sorvetes, Bolos', onDone: { _custom: { type: 'function', display: '<span>ƒ</span> onDone(item)' } } }]
})

export const actions = {
  addToCart ({ commit }, item) {
    commit('ADD_TO_CART', item)
  },
  removeItemFromCart ({ commit }, item) {
    commit('REMOVE_ITEM_FROM_CART', item)
  }
}

export const getters = {
  cartWithDiscountCalc (state) {
    return state.cart.map((item) => {
      const priceWithDiscount = (item.price * item.discount) / 100
      return { ...item, priceWithDiscount }
    })
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

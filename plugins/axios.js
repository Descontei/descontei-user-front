import Vue from 'vue'
import axios from 'axios'

const httpClient = axios.create({
  baseURL: ''
})

if (!Vue.prototype.$axios) {
  Object.defineProperty(Vue.prototype, '$axios', {
    get: () => httpClient,
    set: () => {
      throw new Error('You can\'t set $axios')
    }
  })
}

export default (ctx, inject) => {
  ctx.$axios = httpClient
  inject('$axios', httpClient)
}

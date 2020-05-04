import Vue from 'vue'

const actions = {
  SHOW: 'show',
  MESSAGE: 'message',
  HIDE: 'hide'
}

function newGlobalEvent (eventName = '', hooks = {}) {
  const {
    onShow = () => ({}),
    onHide = () => ({})
  } = hooks
  const bus = new Vue()
  const name = `global-${eventName}:event`
  const ref = {}

  function generic (action) {
    bus.$emit(name, action)
  }

  function show (payload = true) {
    onShow()
    generic({ type: actions.SHOW, payload })
    return ref
  }

  function hide (payload = true) {
    onHide()
    generic({ type: actions.HIDE, payload })
    return ref
  }

  function message (payload = {}) {
    generic({ type: actions.MESSAGE, payload })
    return ref
  }

  function on (callback) {
    bus.$on(name, callback)
    return ref
  }

  function off (callback) {
    bus.$off(name, callback)
    return ref
  }

  ref.show = show
  ref.hide = hide
  ref.message = message
  ref.on = on
  ref.off = off

  return ref
}

const global = {
  loading: newGlobalEvent('loading', {
    onShow: () => {
      // store.dispatch('setGlobalLoading', true);
    },
    onHide: () => {
      // store.dispatch('setGlobalLoading', false);
    }
  }),
  modal: newGlobalEvent('modal'),
  notification: {
    main: newGlobalEvent('notification-main')
  }
}

if (!Vue.prototype.$g) {
  Object.defineProperty(Vue.prototype, '$g', {
    get: () => global,
    set: () => {
      throw new Error('You can\'t set $g')
    }
  })
}

export default (ctx, inject) => {
  ctx.$g = global
  inject('$g', global)
}

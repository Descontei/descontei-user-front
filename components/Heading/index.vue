<template>
  <div class="fixed top-0 left-0 z-40 flex justify-center w-full" :class="classes">
    <div class="flex items-center justify-between w-full px-5 py-5 lg:px-0 lg:w-1/2">
      <custom-svg-image :name="logo" class="w-12 h-12 cursor-pointer" @click.native="goHome" />

      <div class="relative" @click="() => $router.push({ path: '/pedido/checkout' })">
        <span class="absolute top-0 right-0 flex items-center justify-center w-5 h-5 -mr-3 text-sm font-medium text-white rounded-full bg-main-main-red">
          {{ cartItems }}
        </span>
        <custom-svg-image :name="shopCart" class="w-8 h-8 cursor-pointer" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CustomSvgImage from '../CustomSvgImage'

export default {
  components: { CustomSvgImage },
  props: {
    logo: { type: String, default: 'logo' },
    shopCart: { type: String, default: 'shopping-cart-white' },
    classes: { type: String, default: '' }
  },
  computed: {
    ...mapState({
      cartItems: state => state.cart.length
    })
  },
  methods: {
    goHome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<template>
  <div class="w-full h-full">
    <main-loader />
    <modal-add-to-cart />
    <nuxt />
  </div>
</template>

<script>
import MainLoader from '../components/MainLoader'
import ModalAddToCart from '../components/ModalAddToCart'

export default {
  components: { MainLoader, ModalAddToCart }
}
</script>

<style>
html,
body,
#__layout,
#__nuxt {
  width: 100%;
  height: 100%;
}
</style>

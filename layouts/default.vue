<template>
  <div class="w-full h-full">
    <main-loader />
    <nuxt />
  </div>
</template>

<script>
import MainLoader from '../components/MainLoader'

export default {
  components: { MainLoader }
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

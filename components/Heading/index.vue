<template>
  <div class="fixed top-0 left-0 z-40 flex justify-center w-full" :class="classes">
    <div class="flex items-center w-full px-5 py-5 lg:px-0 lg:w-1/2">
      <custom-svg-image :name="logo" class="w-12 h-12 cursor-pointer" @click.native="goHome" />
    </div>
  </div>
</template>

<script>
import CustomSvgImage from '../CustomSvgImage'

export default {
  components: { CustomSvgImage },
  props: {
    logo: { type: String, default: 'logo' },
    classes: { type: String, default: '' }
  },
  methods: {
    goHome () {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

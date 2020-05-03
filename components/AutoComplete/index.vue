<template>
  <div class="relative flex flex-col w-full">
    <div class="flex w-full">
      <span class="flex items-center justify-center pl-5 bg-white rounded-tl-md rounded-bl-md">
        <custom-svg-image name="search" />
      </span>
      <input
        ref="input"
        v-model="search"
        type="text"
        class="w-full px-5 py-4 text-lg border-0 rounded-tl-none rounded-bl-none outline-none rounded-tr-md rounded-br-md focus:shadow-none form-input"
        placeholder="Busque sua região"
        @input="handleInput"
      >
    </div>

    <div
      v-if="completeIsOpen"
      class="absolute top-0 left-0 flex flex-col w-1/2 mt-12 ml-10 bg-white rounded-bl-md rounded-br-md animated fadeIn faster"
    >
      <div
        v-for="(place, index) in placesSorted"
        :key="place.sub"
        :class="{
          'mt-3': !index
        }"
        class="flex flex-col px-5 py-2 text-sm font-medium text-left text-gray-600 cursor-pointer"
        @click="() => handleAutoCompleteClick(place)"
      >
        {{ place.title }}
        <span class="text-gray-500 font-lightitalic">{{ place.sub }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSvgImage from '../CustomSvgImage'
import places from '../../utils/places'

export default {
  components: { CustomSvgImage },
  props: {
    autoFocus: { type: Boolean, default: false }
  },
  data: () => ({
    places: places.slice(0, 5),
    search: '',
    completeIsOpen: false
  }),
  computed: {
    placesSorted () {
      if (!this.search.length) {
        return places.slice(0, 5)
      }
      const key = new RegExp(this.search, 'ig')
      return places.filter(place => key.test(place.title))
    }
  },
  mounted () {
    if (this.autoFocus) {
      this.$refs.input.focus()
    }
  },
  methods: {
    handleInput () {
      if (this.search.length) {
        this.completeIsOpen = true
        return
      }

      this.completeIsOpen = false
    },
    handleAutoCompleteClick (item) {
      this.search = ''
      this.$emit('item-click', item)
    }
  }
}
</script>

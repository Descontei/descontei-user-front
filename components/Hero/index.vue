<template>
  <div
    :style="{
      backgroundImage: 'url(main-banner.jpg)'
    }"
    class="relative flex flex-col items-center justify-center w-full bg-center bg-no-repeat bg-cover h-9/12 lg:h-6/12"
  >
    <span
      class="absolute top-0 left-0 z-10 w-full h-full bg-main-green-primary bg-opacity-75"
    />

    <div class="flex flex-col justify-center mt-10 text-center lg:mt-10">
      <h1 class="z-20 px-5 text-3xl font-black text-white lg:px-0 lg:text-5xl">
        A força do empreendedor brasileiro.
      </h1>
      <h2 class="z-20 px-5 text-xl font-medium text-white lg:px-0 lg:text-2xl">
        Estimule o comércio local para passarmos juntos pela crise.
      </h2>
      <div class="z-20 flex flex-col items-center w-full px-5 mt-5 lg:px-5 lg:mt-12">
        <auto-complete
          auto-focus
          @item-click="handleItemClick"
        />
        <span class="mt-2 text-sm text-gray-100 font-lightitalic">*Selecione sua região para continuar</span>
      </div>
    </div>
  </div>
</template>

<script>
import AutoComplete from '../AutoComplete'
import { slugify } from '../../utils/string'

export default {
  components: { AutoComplete },
  methods: {
    handleItemClick (item) {
      this.$g.loading.show()
      const slug = slugify(item.title)
      this.$router.push({ path: `descontos-em/${slug}` })
    }
  }
}
</script>

<template>
  <div
    :style="{ backgroundColor: '#fff3ec' }"
    class="relative flex flex-col items-center justify-center w-full lg:bg-top h-6/12 lg:h-7/12"
  >
    <div class="absolute bottom-0 left-0 items-end justify-between hidden w-full h-full md:flex">
      <div class="-mb-12">
        <img src="/ilu-1.png" alt="">
      </div>
      <div class="-mb-10">
        <img src="/ilu-2.png" alt="">
      </div>
    </div>

    <div class="flex flex-col items-center justify-center text-center">
      <div class="w-64 mb-5">
        <img class="w-full" src="/logodescontei.png" alt="">
      </div>
      <h1 class="z-20 px-5 text-3xl font-black text-black lg:px-0 lg:text-5xl">
        A força do empreendedor brasileiro
      </h1>
      <h2 class="z-20 px-5 text-xl font-medium text-black lg:px-0 lg:text-2xl">
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

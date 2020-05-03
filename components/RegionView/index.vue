<template>
  <div
    class="relative flex flex-col items-center justify-center w-full bg-gray-100 h-1/2 lg:h-1/3 animated fadeInDown faster"
  >
    <div class="flex flex-col max-w-4xl mt-10 text-center lg:text-left lg:mt-10">
      <h2 class="z-20 px-5 text-3xl font-black text-main-gray-800 lg:px-0 lg:text-4xl">
        Descontos em lugares em {{ region }}
      </h2>
      <h3 class="z-20 px-5 text-xl font-medium text-main-gray-800 lg:px-0 lg:text-2xl">
        Encontre lugares maravilhosos com descontos!
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    region: { type: String, default: 'Rio de Janeiro' }
  }
}
</script>

<template>
  <div
    :style="{
      backgroundImage: `url(/${image})`
    }"
    class="relative flex w-full h-48 bg-center bg-cover rounded-lg lg:w-64"
    @click="$emit('card-click', { image, title, subTitle, discount, id })"
  >
    <span
      class="absolute top-0 left-0 z-10 w-full h-full bg-black rounded-lg bg-opacity-50"
    />
    <div class="z-20 flex flex-col items-start justify-end p-5">
      <span class="text-sm font-light text-white">{{ discount }}%</span>
      <span class="text-xl font-bold text-white">{{ title }}</span>
      <span class="-mt-1 text-lg font-light text-left text-white">{{ subTitle }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    image: { type: String, default: 'bread.jpg' },
    id: { type: String, default: '123' },
    title: { type: String, default: 'Padarias' },
    subTitle: { type: String, default: 'Pães, cafés, tortas' },
    discount: { type: Number, default: 17 }
  }
}
</script>

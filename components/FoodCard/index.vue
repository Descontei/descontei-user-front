<template>
  <div
    :style="{
      backgroundImage: `url(/${food.image})`
    }"
    class="relative flex w-full h-48 bg-center bg-cover rounded-lg lg:w-64"
    @click="$emit('card-click', food)"
  >
    <span
      class="absolute top-0 left-0 z-10 w-full h-full bg-black rounded-lg bg-opacity-50"
    />
    <div class="z-20 flex flex-col items-start justify-end p-5">
      <div class="flex flex-col items-start mb-6 text-white">
        <span class="flex items-center text-sm font-lightitalic">
          <s class="mr-2">{{ priceFormated }}</s>
          por
        </span>
        <span class="text-lg font-bold">{{ priceWithDiscount }}</span>
        <span class="text-sm font-lightitalic">{{ food.discount }}% de desconto!</span>
      </div>
      <span class="text-2xl font-bold text-white">{{ food.title }}</span>
      <span class="-mt-1 text-lg font-light text-left text-white">{{ food.description }}</span>
    </div>
  </div>
</template>

<script>
const food = {
  image: 'sweet.jpg',
  title: 'Padarias',
  description: 'Pães, cafés, tortas',
  discount: 17,
  price: 6
}

const formatPrice = value => value.toLocaleString('pt-BR', { currency: 'BRL', style: 'currency' })

export default {
  props: {
    food: { type: Object, default: () => food },
    image: { type: String, default: 'bread.jpg' },
    id: { type: String, default: '123' },
    title: { type: String, default: 'Padarias' },
    subTitle: { type: String, default: 'Pães, cafés, tortas' },
    discount: { type: Number, default: 17 }
  },
  computed: {
    priceWithDiscount () {
      const discount = (this.food.price * this.food.discount) / 100
      return formatPrice(this.food.price - discount)
    },
    priceFormated () {
      return formatPrice(this.food.price)
    }
  }
}
</script>

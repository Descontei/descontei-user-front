<template>
  <div
    class="flex flex-col items-center justify-center w-full py-16"
  >
    <div
      :class="{
        'items-start': align === 'left'
      }"
      class="flex flex-col justify-center w-10/12 text-center lg:w-auto"
    >
      <h2 class="px-5 text-2xl font-black text-gray-800 lg:px-0 lg:text-3xl">
        {{ title }}
      </h2>
      <h3 v-if="subTitle" class="px-5 text-base font-medium text-gray-800 lg:px-0 lg:text-xl">
        {{ subTitle }}
      </h3>
      <div class="flex flex-col items-center w-full mt-6 lg:flex-row">
        <food-card
          v-for="(card, index) in cards"
          :key="card.title"
          class="mb-2 cursor-pointer lg:mb-0 lg:mr-2"
          :class="{
            'mr-0 mb-0': index === cards.length
          }"
          :image="card.image"
          :title="card.title"
          :sub-title="card.subTitle"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FoodCard from '../FoodCard'

const cards = [
  {
    image: 'bread.jpg',
    title: 'Padarias',
    subTitle: 'Pães, cafés, tortas'
  },
  {
    image: 'japa.jpg',
    title: 'Japonês',
    subTitle: 'Sushis, Temakis, Chás'
  },
  {
    image: 'sweet.jpg',
    title: 'Docêrias',
    subTitle: 'Sorvetes, Bolos'
  },
  {
    image: 'fitness.jpg',
    title: 'Fitness',
    subTitle: 'Saladas, Açaís'
  }
]

export default {
  components: { FoodCard },
  props: {
    title: { type: String, default: 'Os melhores descontos' },
    subTitle: { type: String, default: null },
    align: { type: String, default: 'center' }
  },
  data: () => ({
    cards
  })
}
</script>

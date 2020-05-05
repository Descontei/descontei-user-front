<template>
  <div class="w-full h-full">
    <heading
      shop-cart="shopping-cart-black"
      :is-hidden-logo="true"
    />
    <hero />
    <food-viewer />
  </div>
</template>

<script>
import Heading from '../components/Heading'
import Hero from '../components/Hero'
import FoodViewer from '../components/FoodViewer'

export default {
  components: { Hero, Heading, FoodViewer }
}
</script>

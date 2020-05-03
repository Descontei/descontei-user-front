<template>
  <div class="w-full h-full">
    <heading />
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

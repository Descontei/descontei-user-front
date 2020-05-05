<template>
  <div class="w-full h-full">
    <heading
      shop-cart="shopping-cart-black"
      :is-hidden-logo="true"
    />
    <hero />
    <food-viewer
      @card-click="handleCardClick"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Heading from '../components/Heading'
import Hero from '../components/Hero'
import FoodViewer from '../components/FoodViewer'

export default {
  components: { Hero, Heading, FoodViewer },
  methods: {
    ...mapActions({
      addToCart: 'addToCart'
    }),
    handleCardClick (payload) {
      this.$g.modal.show({
        ...payload,
        title: `Adicionar ${payload.title} ao carrinho`,
        body: payload.description,
        onDone: (item) => {
          this.addToCart(item)
        }
      })
    }
  }
}
</script>

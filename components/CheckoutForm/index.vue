<template>
  <div
    class="flex flex-col items-center justify-center w-full py-16"
  >
    <div
      class="flex flex-col items-start justify-center w-10/12 lg:w-1/2"
    >
      <h2 class="px-5 text-xl font-black text-gray-800 lg:px-0 lg:text-2xl">
        Todos os items
      </h2>

      <div
        v-for="(item, index) in items"
        :key="item.title"
        :style="{
          animationDelay: `${(100 * index) - 50}ms`
        }"
        class="flex items-center justify-between w-full mt-10 faster fadeInUp animated"
      >
        <div class="flex">
          <div class="w-16 h-16 overflow-hidden rounded-lg">
            <img :src="`/${item.image}`" class="w-full h-full" alt="">
          </div>

          <div class="flex flex-col ml-5">
            <h3 class="text-lg text-gray-800">
              {{ item.title }}
            </h3>
            <h4>{{ item.description }}</h4>
          </div>
        </div>

        <div class="flex items-center">
          <button class="text-4xl text-gray-800" @click="() => removeItemFromCart(item)">
            &times;
          </button>
        </div>
      </div>

      <h2 class="px-5 mt-16 text-xl font-black text-gray-800 lg:px-0 lg:text-2xl">
        Pagamento
      </h2>
      <client-only>
        <credit-card />
      </client-only>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CreditCard from '../CreditCard'

export default {
  components: { CreditCard },
  computed: {
    ...mapState({
      items: state => state.cart
    })
  },
  methods: {
    ...mapActions({
      removeItemFromCart: 'removeItemFromCart'
    })
  }
}
</script>

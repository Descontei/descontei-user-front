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
          <span>{{ item.priceWithDiscount | formatPrice }}</span>

          <button class="p-0 text-2xl text-gray-800" @click="() => removeItemFromCart(item)">
            ✖️
          </button>
        </div>
      </div>

      <div class="flex items-center justify-end w-full mt-5">
        <span class="ml-5 text-xl font-bold text-gray-800">Total {{ total | formatPrice }}</span>
      </div>

      <h2 class="px-5 mt-16 text-xl font-black text-gray-800 lg:px-0 lg:text-2xl">
        Pagamento
      </h2>
      <client-only>
        <credit-card />
      </client-only>

      <div class="flex items-center justify-end w-full mt-12">
        <button class="w-full px-10 py-4 text-lg text-white rounded-lg lg:w-auto bg-main-green-primary" @click="finish">
          ✓ Finalizar pedido
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import CreditCard from '../CreditCard'

const formatPrice = value => value.toLocaleString('pt-BR', { currency: 'BRL', style: 'currency' })

export default {
  filters: {
    formatPrice
  },
  components: { CreditCard },
  computed: {
    ...mapGetters({
      items: 'cartWithDiscountCalc'
    }),
    total () {
      return this.items.reduce((acc, cur) => {
        return acc + cur.priceWithDiscount
      }, 0)
    }
  },
  methods: {
    ...mapActions({
      removeItemFromCart: 'removeItemFromCart'
    }),
    finish () {
      this.$g.loading.show()

      setTimeout(() => {
        this.$g.loading.hide()
        this.$router.push({ path: '/pedido/acompanhar' })
      }, 1000)
    }
  }
}
</script>

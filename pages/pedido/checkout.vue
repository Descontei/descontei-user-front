<template>
  <div class="w-full h-full">
    <heading
      logo="main-logo"
      shop-cart="shopping-cart-black"
      classes="bg-gray-100"
    />
    <checkout-banner :cart-items="cartItems" />
    <checkout-form />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Heading from '../../components/Heading'
import CheckoutBanner from '../../components/CheckoutBanner'
import CheckoutForm from '../../components/CheckoutForm'

export default {
  components: { Heading, CheckoutBanner, CheckoutForm },
  computed: {
    ...mapState({
      cartItems: state => state.cart.length
    })
  }
}
</script>

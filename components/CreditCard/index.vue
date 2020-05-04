<template>
  <div class="flex flex-col items-center w-full">
    <div class="mt-10 card-wrapper" />
    <form id="form" class="flex flex-col mt-10">
      <div class="flex flex-col">
        <span class="font-medium text-gray-800 text-md">Número</span>
        <input type="text" placeholder="0000 **** **** 0000" class="font-medium form-input" name="number">
      </div>

      <div class="flex flex-col mt-3">
        <span class="font-medium text-gray-800 text-md">Nome</span>
        <input type="text" class="font-medium form-input" placeholder="Igor Halfeld" name="name">
      </div>

      <div class="flex items-center justify-between mt-3">
        <div class="flex flex-col mr-1">
          <span class="font-medium text-gray-800 text-md">Validade</span>
          <input type="text" class="font-medium form-input" placeholder="**/****" name="expiry">
        </div>
        <div class="flex flex-col ml-1">
          <span class="font-medium text-gray-800 text-md">CVC</span>
          <input type="text" class="form-input" placeholder="***" name="cvc">
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import Card from 'card'

export default {
  mounted () {
    const card = new Card({ // eslint-disable-line
      form: '#form',
      container: '.card-wrapper',

      placeholders: {
        number: '**** **** **** ****',
        name: 'Igor Halfeld',
        expiry: '**/****',
        cvc: '***'
      }
    })
  }
}
</script>

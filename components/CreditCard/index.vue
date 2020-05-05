<template>
  <div class="flex flex-col items-center w-full">
    <div class="mt-10 card-wrapper" />
    <form id="form" class="flex flex-col w-full mt-10 lg:w-auto">
      <div class="flex flex-col">
        <span class="font-medium text-gray-800 text-md">Número</span>
        <input type="text" placeholder="0000 **** **** 0000" class="font-medium form-input" name="number">
      </div>

      <div class="flex flex-col mt-3">
        <span class="font-medium text-gray-800 text-md">Nome</span>
        <input type="text" class="font-medium form-input" placeholder="Igor Halfeld" name="name">
      </div>

      <div class="flex flex-col items-center justify-between w-full mt-3 lg:flex-row lg:w-auto">
        <div class="flex flex-col w-full mr-1 lg:w-auto">
          <span class="font-medium text-gray-800 text-md">Validade</span>
          <input type="text" class="font-medium form-input" placeholder="**/****" name="expiry">
        </div>
        <div class="flex flex-col w-full mt-3 lg:ml-1 lg:w-auto lg:mt-0">
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

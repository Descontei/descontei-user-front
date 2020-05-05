<template>
  <div
    class="flex flex-col items-center justify-center w-full py-16"
  >
    <div
      class="flex flex-col items-start justify-center w-10/12 lg:w-1/2"
    >
      <h2 class="px-5 text-xl font-black text-gray-800 lg:px-0 lg:text-2xl">
        Pedido #4913
      </h2>

      <div
        v-for="(s, index) in status"
        :key="s.label"
        class="flex items-center mt-10"
        :class="{ 'mt-10': !!index }"
      >
        <span class="flex items-center justify-center w-10 h-10 text-2xl text-black rounded-full bg-main-green-primary">
          <custom-svg-image :name="s.icon" />
        </span>
        <span class="ml-3 text-xl font-medium text-gray-800">{{ s.label }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import CustomSvgImage from '../CustomSvgImage'

const status = [
  { icon: 'check', label: 'Pedido feito' },
  { icon: 'check', label: 'Restaurante aceitou seu pedido' },
  { icon: 'check', label: 'Seu pedido esta indo até você' },
  { icon: 'check', label: 'Pedido entregue' }
]

export default {
  components: { CustomSvgImage },
  data: () => ({
    status
  })
}
</script>

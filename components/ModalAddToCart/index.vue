<template>
  <div
    v-if="active"
    class="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
    @click="close"
  >
    <div
      class="fixed animated zoomIn faster"
      @click.stop
    >
      <div class="flex flex-col overflow-hidden bg-white rounded-lg">
        <div
          :style="{
            backgroundImage: `url(/${props.image})`
          }"

          class="relative flex w-full h-48 bg-center bg-cover "
        />

        <div class="flex flex-col p-4 bg-white">
          <div class="">
            <h1 class="text-lg font-black text-gray-800">
              {{ props.title }}
            </h1>
            <h2 class="text-sm font-bold text-gray-700">
              {{ props.price | formatPrice }} com {{ props.discount }}% de desconto!
            </h2>
            <div class="max-w-xl mt-5 font-semibold text-gray-600">
              {{ props.body }}
            </div>
          </div>
          <div class="flex justify-end mt-10">
            <button class="mr-12 font-medium focus:outline-none text-blue-6" @click="close">
              Cancelar
            </button>
            <button class="font-medium focus:outline-none text-blue-6" @click="handleDone">
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const formatPrice = value => value.toLocaleString('pt-BR', { currency: 'BRL', style: 'currency' })

export default {
  name: 'Modal',
  filters: {
    formatPrice
  },
  data () {
    return {
      props: {
        onDone: () => ({}),
        title: '',
        body: '',
        image: '',
        discount: 0
      },
      active: false
    }
  },
  created () {
    this.$g.modal.on(this.handleEvents)
  },
  destroyed () {
    this.$g.modal.off(this.handleEvents)
  },
  methods: {
    handleEvents (action) {
      const types = {
        show: () => {
          this.applyConfigs(action)
          this.active = true
        },
        hide: () => {
          this.active = false
        }
      }

      return types[action.type] && types[action.type]()
    },
    applyConfigs (action) {
      this.props = action.payload
    },
    handleDone () {
      this.props.onDone(this.props)
      this.close()
    },
    close () {
      this.$g.modal.hide()
    }
  }
}
</script>

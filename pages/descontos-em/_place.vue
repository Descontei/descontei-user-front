<template>
  <div class="w-full h-full">
    <heading
      logo="main-logo"
      shop-cart="shopping-cart-black"
      classes="bg-gray-100"
    />
    <region-view :region="region" />

    <food-viewer
      sub-title="30 minutos"
      title="Padaria"
      class="animated fadeInDown faster"
      align="left"
      @card-click="handleCardClick"
    />
    <food-viewer
      sub-title="25 minutos"
      title="Japonês"
      :style="{ animationDelay: '300ms' }"
      class="animated fadeInDown faster"
      align="left"
    />
    <food-viewer
      sub-title="1 hora"
      title="Docêrias"
      :style="{ animationDelay: '450ms' }"
      class="animated fadeInDown faster"
      align="left"
    />
    <food-viewer
      sub-title="1 hora e 30 minutos"
      title="Fitness"
      :style="{ animationDelay: '500ms' }"
      class="animated fadeInDown faster"
      align="left"
    />
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Heading from '../../components/Heading'
import FoodViewer from '../../components/FoodViewer'
import RegionView from '../../components/RegionView'
import places from '../../utils/places'
import { slugify } from '../../utils/string'

export default {
  components: { Heading, RegionView, FoodViewer },
  asyncData ({ $g, params }) {
    $g.loading.show()
    const { place: slug } = params
    const region = places.find(place => slugify(place.title) === slug)

    return { region: region.title }
  },
  data: () => ({
    region: null
  }),
  mounted () {
    this.$g.loading.hide()
  },
  methods: {
    ...mapActions({
      addToCart: 'addToCart'
    }),
    handleCardClick (payload) {
      this.$g.modal.show({
        image: payload.image,
        discount: payload.discount,
        title: `Adicionar ${payload.title} ao carrinho`,
        body: payload.subTitle,
        onDone: (item) => {
          this.addToCart(item)
        }
      })
    }
  }
}
</script>

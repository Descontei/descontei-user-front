<template>
  <div v-show="isVisible" class="loading animated fadeIn faster">
    <span class="loading-spinner" />
  </div>
</template>

<script>
export default {
  data: () => ({
    isVisible: false
  }),
  mounted () {
    this.$g.loading.on(this.handleEvent)
  },
  methods: {
    handleEvent (action) {
      const types = {
        hide: () => {
          this.isVisible = false
        },
        show: () => {
          this.isVisible = true
        }
      }

      return types[action.type] && types[action.type]()
    }
  }
}
</script>

<style>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.loading {
  position: fixed;
  z-index: 9999;
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;
}
.loading-spinner {
  border: 4px solid transparent;
  border-radius: 50%;
  border-left-color: #1ebf8e;
  border-right-color: #1ebf8e;
  width: 100px;
  height: 100px;
  animation: spin 1s linear infinite;
}
</style>

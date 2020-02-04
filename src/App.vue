<template>
  <div id="m-app">
    <m-loading />
    <a-row type="flex" justify="center" align="top" class="full-height">
      <a-col :xs="24" :md="8" :lg="6">
        <m-sidebar :data="data" />
      </a-col>
      <a-col :xs="24" :md="16" :lg="18" class="full-height">
        <m-mapbox-map :data="data" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import MSidebar from './components/MSidebar.vue'
import MMapboxMap from './components/MMapboxMap'
import MLoading from './components/MLoading'
import rawData from '@/assets/json/testBlob.json'

export default {
  name: 'app',
  data() {
    return {
      data: rawData // get the rawData from the document
    }
  },
  components: {
    MSidebar,
    MMapboxMap,
    MLoading
  },
  async created() {
    this.$store.commit('setLoading', true)
    try {
      // simulate Ajax request with delay
      await new Promise(resolve => setTimeout(resolve, 2500))
      await this.$store.dispatch('seedData', this.data)
    } catch (error) {
      throw error
    }
    this.$store.commit('setLoading', false)
  }
}
</script>

<style lang="scss">
#m-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100vh;

  .full-height {
    height: 100%;
  }
}
</style>

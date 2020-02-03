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
import rawData from '@/assets/json/testBlob3.json'

export default {
  name: 'app',
  data() {
    return {
      data: rawData
    }
  },
  components: {
    MSidebar,
    MMapboxMap,
    MLoading
  },
  async created() {
    this.$store.commit('setLoading', true)
    // simulate Ajax request with delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    await this.$store.dispatch('seedData', this.data)
    this.$store.commit('setLoading', false)
  },
  methods: {}
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

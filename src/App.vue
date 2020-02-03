<template>
  <div id="m-app">
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
    MMapboxMap
  },
  created() {
    this.$store.dispatch('seedData', rawData)
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

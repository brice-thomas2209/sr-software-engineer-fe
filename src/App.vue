<template>
  <div id="m-app">
    <m-sidebar :data="data" />
    <!-- <m-mapbox-map /> -->
  </div>
</template>

<script>
import MSidebar from './components/MSidebar.vue'
import rawData from '@/assets/json/testBlob.json'

export default {
  name: 'app',
  data() {
    return {
      data: rawData
    }
  },
  components: {
    MSidebar
  },
  methods: {}
}
</script>

<style>
#m-app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

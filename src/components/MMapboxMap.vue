<template>
  <div class="m-mapbox-map">
    <MglMap
      :accessToken="accessToken"
      :mapStyle.sync="mapStyle"
      @load="onMapLoaded"
    >
      <MglMarker
        v-for="f in markersFilter"
        :key="f.properties.id"
        :coordinates="f.geometry.coordinates"
      >
        <div
          class="marker"
          :style="{ backgroundColor: f.properties.color }"
          slot="marker"
        />
        <MglPopup>
          <h4>{{ f.properties.project.Title }}</h4>
        </MglPopup>
      </MglMarker>
    </MglMap>
  </div>
</template>

<script>
import Mapbox from 'mapbox-gl'
import { MglMap, MglMarker, MglPopup } from 'vue-mapbox'
import { mapState } from 'vuex'

export default {
  name: 'MMApboxMap',
  components: {
    MglMap,
    MglMarker,
    MglPopup
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      // access token account brice.thomas2209@gmail.com countact email if API Key is invalid
      accessToken:
        'pk.eyJ1IjoiYnJpY2UtdGhvbWFzMjIwOSIsImEiOiJjazY2YzRybmUwZmIyM2xtaTZhdDNzYWd1In0.Ns6Lp5pF7lsXMvlPnd9w7A',
      mapStyle: 'mapbox://styles/mapbox/light-v9',
      //cordinates of sydney Australia
      coordinatesSydney: [151.2073, -33.8708]
    }
  },
  computed: {
    ...mapState(['selectedProjects']),
    markersFilter() {
      if (!Object.entries(this.selectedProjects).length) return []

      return this.data.features.filter(
        f => this.selectedProjects[f.properties.id].selected
      )
    }
  },
  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox
  },
  methods: {
    async onMapLoaded(event) {
      const asyncActions = event.component.actions

      // Center the map over Sydney
      await asyncActions.flyTo({
        center: this.coordinatesSydney,
        zoom: 14,
        speed: 1
      })
    }
  }
}
</script>

<style lang="scss">
.m-mapbox-map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  .mapboxgl-popup-content {
    h4 {
      margin-top: 5px;
    }
  }

  .mapboxgl-control-container {
    display: block;
    z-index: 99;
  }

  .marker {
    background-size: cover;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    border: 1px solid rgba(1, 1, 1, 0.1);
    // box-shadow: 0 0 6px rgba(1, 1, 1, 0.2);
    position: absolute;
    z-index: 2;

    &:after {
      content: '';
      width: 40%;
      height: 40%;
      background: white;
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      // box-shadow: 0 0 6px rgba(1, 1, 1, 0.2);
      z-index: 3;
    }
  }
}
</style>

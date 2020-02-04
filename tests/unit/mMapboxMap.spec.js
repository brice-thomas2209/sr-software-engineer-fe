import MMapboxMap from '@/components/MMapboxMap'
import { Store } from 'vuex-mock-store'
import { mount, createLocalVue } from '@vue/test-utils'
import { mutations } from '@/store'
import { MglMap } from 'vue-mapbox'
import projectFaker from '../faker/project.json'
import selectedProjectsFaker from '../faker/selectedProjects.json'
import geojsonFaker from '../faker/geojson.json'
require('mapbox-gl')

// set up to allow to allow jest to mock mapbox without UI
window.URL.createObjectURL = function() {}

// Setting up custom jest mock for mapbox-gl
jest.mock('mapbox-gl', () => ({
  MMapboxMap: () => ({})
}))

// Initialise the store
const store = new Store({
  state: { selectedProjects: selectedProjectsFaker },
  mutations
})

describe('MMapboxMap', () => {
  let component
  // mount the component to test in every test
  beforeEach(() => {
    component = mount(MMapboxMap, {
      propsData: {
        data: geojsonFaker
      },
      mocks: {
        $store: store
      }
    })
  })

  it('markers are being returned when project is selected in store', () => {
    let projectId = projectFaker['Project ID']
    store.state.selectedProjects[projectId].selected = true
    expect(
      component.vm.markersFilter.filter(m => m.properties.id === projectId)
        .length
    ).toBeTruthy()
  })
})

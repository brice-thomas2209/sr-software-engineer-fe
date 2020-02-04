import MMapboxMap from '@/components/MMapboxMap'
import { Store } from 'vuex-mock-store'
import { mount, createLocalVue } from '@vue/test-utils'
import { mutations } from '@/store'
import { MglMap } from 'vue-mapbox'
import projectFaker from '../faker/project.json'
import selectedProjectsFaker from '../faker/selectedProjects.json'
import geojsonFaker from '../faker/geojson.json'
require('mapbox-gl')

window.URL.createObjectURL = function() {}

jest.mock('mapbox-gl', () => ({
  MMapboxMap: () => ({})
}))

const store = new Store({
  state: { selectedProjects: selectedProjectsFaker },
  mutations
})

describe('MMapboxMap', () => {
  let component
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

  it('markersFilter is being when project is selected', () => {
    let projectId = projectFaker['Project ID']
    store.state.selectedProjects[projectId].selected = true
    expect(
      component.vm.markersFilter.filter(m => m.properties.id === projectId)
        .length
    ).toBeTruthy()
    console.log(component.vm.markersFilter.length)
    console.log(component.find(MglMap))
  })
})

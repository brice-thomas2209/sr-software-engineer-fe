import { Switch } from 'ant-design-vue'
import MProjectCard from '@/components/MProjectCard'
import { Store } from 'vuex-mock-store'
import { mount, createLocalVue  } from '@vue/test-utils'
import { mutations } from '@/store'
import Antd from 'ant-design-vue'
import projectFaker from '../faker/project.json'
import selectedProjectsFaker from '../faker/selectedProjects.json'

// create an extended `Vue` constructor
const localVue = createLocalVue()
// install plugins as normal
localVue.use(Antd)

const store = new Store({
  state: { selectedProjects: selectedProjectsFaker },
  mutations
})

describe('MProjectCard', () => {
  let component
  beforeEach(() => {
    component = mount(MProjectCard, {
      localVue,
      propsData: {
        project: projectFaker
      },
      mocks: {
        $store: store
      }
    })
  })
  
  it('Title of the card should match project prop', () => {
    expect(component.find('.ant-card-head-title').element.innerHTML).toBe(projectFaker.Title)
  })

  it('Switch is active when store value is selected', () => {
    let projectId = projectFaker['Project ID']
    store.state.selectedProjects[projectId].selected = true

    expect(component.find(Switch).props('checked')).toBeTruthy()
  })
})
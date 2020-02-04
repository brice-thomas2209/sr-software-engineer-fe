import { Spin } from 'ant-design-vue'
import MLoading from '@/components/MLoading'
import { Store } from 'vuex-mock-store'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Antd from 'ant-design-vue'

// create an extended `Vue` constructor
const localVue = createLocalVue()
// install plugins as normal
localVue.use(Antd)

const store = new Store({
  state: { isLoading: true }
})

describe('MLoading', () => {
  let component
  beforeEach(() => {
    component = shallowMount(MLoading, {
      localVue,
      mocks: {
        $store: store
      }
    })
  })

  it('should render spinner child component', () => {
    expect(component.find(Spin).exists()).toBeTruthy()
  })

  it('should render display block isLoading is true', () => {
    expect(component.find('.m-loading').isVisible()).toBeTruthy()
  })

  it('should not render spinner if state isLoading is false', () => {
    store.state.isLoading = false
    expect(component.find('.m-loading').isVisible()).toBeFalsy()
  })
})

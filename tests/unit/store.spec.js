import { mutations, actions } from '@/store'
import projectFaker from '../faker/project.json'
import selectedProjectsFaker from '../faker/selectedProjects.json'

const { setProjectSelection, setLoading } = mutations

describe('mutations', () => {
  it('setLoading', () => {
    const state = { isLoading: false }
    setLoading(state, true)
    expect(state.isLoading).toBeTruthy()
  })

  it('setProjectSelection', () => {
    const projectId = projectFaker['Project ID']
    const state = { selectedProjects: selectedProjectsFaker }
    setProjectSelection(state, {
      projectId: projectId,
      selectionState: true
    })

    expect(state.selectedProjects[projectId].selected).toBeTruthy()
  })
})

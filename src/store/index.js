import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const state = {
  selectedProjects: {},
  isLoading: false
}

export const mutations = {
  update(state, { prop, val }) {
    state[prop] = val
  },
  setProjectSelection(state, { projectId, selectionState }) {
    if (state.selectedProjects[projectId])
      Vue.set(state.selectedProjects[projectId], 'selected', selectionState)
  },
  setLoading(state, value) {
    state.isLoading = value
  }
}

export const actions = {
  seedData({ commit }, rawData) {
    let projects = {}
    rawData.features.forEach(f => {
      projects[f.properties.id] = {
        selected: false,
        title: f.properties.project.Title
      }
    })
    commit('update', {
      prop: 'selectedProjects',
      val: projects
    })
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})

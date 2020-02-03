import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    selectedProjects: {}
  },
  mutations: {
    update(state, { prop, val }) {
      state[prop] = val
    },
    setProjectSelection(state, { projectId, selectionState }) {
      console.log(selectionState)
      if (state.selectedProjects[projectId])
        Vue.set(state.selectedProjects[projectId], 'selected', selectionState)
    }
  },
  actions: {
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
})

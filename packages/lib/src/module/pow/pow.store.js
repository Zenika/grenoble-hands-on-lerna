export default {
  namespaced: true,
  state: {
    puissance: 2
  },
  getters: {
    getPuissance: state => state.puissance
  },
  mutations: {
    setPuissance(state, newPuissance) {
      state.puissance = newPuissance
    }
  },
  actions: {
    powTow: ({commit, getters}) => {
      commit('setPuissance', getters.getPuissance ** 2)
    }
  },
  modules: {
  }
}

import * as types from '../types'
export default {
  state: {
    name: 'kp'
  },
  getters: {
    name: state => state.name
  },
  actions: {
    changeName ({commit}, name) {
      commit(types.CHANGE_NAME, name)
    }
  },
  mutations: {
    [types.CHANGE_NAME] (state, name) {
      state.name = name
    }
  }
}

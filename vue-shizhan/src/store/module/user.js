const SET_USERNAME = 'SET_USERNAME'

const state = {
  userName: 'Kuma'
}

const mutations = {
  SET_USERNAME(state, newName) {
    state.user.userName = newName
  }
}

const actions = {}

export default {
  // namespaced: true,
  state,
  mutations,
  actions
}

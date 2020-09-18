const SET_APPNAME = 'SET_APPNAME'

const mutations = {
  SET_APPNAME(state, newAppname) {
    state.appName = newAppname + Math.random()
  }
}

export default mutations

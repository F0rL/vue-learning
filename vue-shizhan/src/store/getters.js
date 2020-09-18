const getters = {
  appNameVersion: state => {
    console.log(state.appName + 'v2.0')
    return state.appName + '-v2.0'
  }
}

export default getters

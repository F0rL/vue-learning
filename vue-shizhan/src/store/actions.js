import { getAppName } from '@/api/app'
const actions = {
  async updateAppName({ commit }) {
    console.log('sdsf')
    try {
      const {
        info: { appName }
      } = await getAppName()
      commit('SET_APPNAME', appName)
    } catch (err) {
      console.log(err)
    }
  }
  // updateAppName({ commit }) {
  //   getAppName()
  //     .then(res => {
  //       const {
  //         info: { appName }
  //       } = res
  //       commit('SET_APPNAME', appName)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
}

export default actions

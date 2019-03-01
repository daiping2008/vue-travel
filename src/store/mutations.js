import * as types from './mutation-type'

const mutations = {
  [types.CHANGE_CITY] (state, cityname) {
    state.city = cityname
  }
}
export default mutations

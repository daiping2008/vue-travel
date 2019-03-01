import * as types from './mutation-type'
import { saveToLocal } from '@/common/js/localStorage'
import * as keyTypes from '@/common/js/localStorageKey'
export default {

  changeCityAction ({ commit }, cityname) {
    saveToLocal(123456, keyTypes.CURR_CITY, cityname)
    commit(types.CHANGE_CITY, cityname)
  }
}

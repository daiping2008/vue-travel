import { get } from './helper'

const getIndex = (get('/api/index'))
const getCity = (get('/api/city'))
const getDetail = (get('/api/detail'))
export {
  getIndex,
  getCity,
  getDetail
}

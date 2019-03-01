import { get } from './helper'

const getIndex = (get('/api/index'))
const getCity = (get('/api/city'))
export {
  getIndex,
  getCity
}

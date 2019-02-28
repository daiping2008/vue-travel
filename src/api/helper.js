import axios from 'axios'

const baseUrl = ''

export const get = url =>
  (params = {}) => (
    axios.get(baseUrl + url, {
      params
    }).then(res => {
      let { status, data } = res
      return status === 200 ? data : ''
    }).catch(e => {})
  )

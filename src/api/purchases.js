import apiUrl from '../apiConfig'
import axios from 'axios'
export const createPurchase = (data, user) => {
  return axios({
    url: apiUrl + '/purchases',
    method: 'post',
    data: { purchase: data },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}
export const indexPurchase = (user) => {
  return axios({
    url: apiUrl + '/purchases',
    method: 'get',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const refundPurchase = (id, user) => {
  return axios({
    url: apiUrl + '/purchases/' + id,
    method: 'delete',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

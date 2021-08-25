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

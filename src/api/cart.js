import apiUrl from '../apiConfig'
import axios from 'axios'

export const addToCart = (data, user) => {
  return axios({
    url: apiUrl + '/carts',
    method: 'post',
    data: { cart: data },
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const showCart = (user) => {
  return axios({
    url: apiUrl + '/carts',
    method: 'get',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

export const removeFromCart = (id, user) => {
  return axios({
    url: apiUrl + '/carts/' + id,
    method: 'delete',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

// export const getCartItem = (id, user) => {
//   return axios({
//     url: apiUrl + '/carts/' + id,
//     method: 'get',
//     headers: {
//       Authorization: `Bearer ${user.token}`
//     }
//   })
// }

import apiUrl from '../apiConfig'
import axios from 'axios'
export const indexMovies = (user) => {
  return axios({
    method: 'GET',
    url: apiUrl + '/movies',
    headers: {
      Authorization: `Bearer ${user.token}`
    }
  })
}

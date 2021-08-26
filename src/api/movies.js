import apiUrl from '../apiConfig'
import axios from 'axios'
export const indexMovies = () => {
  return axios({
    method: 'GET',
    url: apiUrl + '/movies'
  })
}

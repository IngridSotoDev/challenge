import axios from 'axios'
import { Cookies } from 'react-cookie'

export const api = axios.create({
  baseURL: process.env.API_URL,
})

export const apiToken = axios.create({
  baseURL: process.env.API_URL,
  auth: {
    username: process.env.API_AUTH_USERNAME,
    password: process.env.API_AUTH_PASSWORD,
  },
})

api.interceptors.request.use((request) => {
  const cookies = new Cookies()
  const token = cookies.get('auth_token')

  if (token) {
    request.headers.Authorization = `Bearer ${token}`
  }

  return request
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      const cookies = new Cookies()
      cookies.remove('auth_token')
      window.location.href = '/'
    }

    return Promise.reject(error)
  },
)

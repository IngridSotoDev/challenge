import axios from 'axios'

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

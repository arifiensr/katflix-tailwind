import axios from 'axios'

const baseUrl = import.meta.env.VITE_TMDB_BASEURL
const apiKey = import.meta.env.VITE_TMDB_APIKEY

export default axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: 'application/json',
  },
  params: {
    api_key: apiKey,
  },
})

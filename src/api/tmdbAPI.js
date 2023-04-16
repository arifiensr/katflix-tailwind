import axios from 'axios'
import { useContext } from 'react'
import { GlobalContext } from '../config/GlobalState'

const baseUrl = import.meta.env.VITE_TMDB_BASEURL
const apiKey = import.meta.env.VITE_TMDB_APIKEY
const { isLogin, setIsLogin, token, setToken, account, setAccount, session, setSession } = useContext(GlobalContext)

export const tmdbApi = axios.create({
  baseURL: baseUrl,
  headers: {
    Accept: 'application/json',
  },
  params: {
    api_key: apiKey,
  },
})

export const loginSession = async (username, password) => {
  const token = await tmdbApi.get('authentication/token/new')
  await tmdbApi.post('authentication/token/validate_with_login', { username: username, password: password, request_token: token.data.request_token })
  const session = await tmdbApi.post('authentication/session/new', { request_token: token.data.request_token })
  const account = await tmdbApi.get('account', { params: { session_id: session.data.session_id } })
  // setIsLogin(true)
  // setToken(token.data.request_token)
  // setSession(session.data.session_id)
  // setAccount(account.data)
  localStorage.setItem('userLogin', true)
  localStorage.setItem('token', JSON.stringify(token.data.request_token))
  localStorage.setItem('session', JSON.stringify(session.data.session_id))
  localStorage.setItem('account', JSON.stringify(account.data))
}

export const getPopularMovies = async () => {
  const popular = await tmdbApi.get('movie/popular')
  const combines = popular.data.results.map(async (movie) => {
    const movieDatas = await tmdbApi.get(`movie/${movie.id}`, { params: { append_to_response: 'credits' } })
    const movieVideos = await tmdbApi.get(`movie/${movie.id}/videos`)
    movie = movieDatas.data
    movie.director = movieDatas.data.credits.crew.filter((crew) => crew.job === 'Director')[0].name
    movie.trailer = movieVideos.data.results.filter((video) => video.type === 'Trailer')[0]
    return movie
  })
  let results = await Promise.all(combines)
  localStorage.setItem('popularMovies', results)
}

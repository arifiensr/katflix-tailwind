import { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false)
  const [token, setToken] = useState('')
  const [session, setSession] = useState('')
  const [account, setAccount] = useState([])

  useEffect(() => {
    if (localStorage.getItem('userLogin')) {
      setIsLogin(true)
      setToken(JSON.parse(localStorage.getItem('token')))
      setSession(JSON.parse(localStorage.getItem('session')))
      setAccount(JSON.parse(localStorage.getItem('account')))
    }
  }, [isLogin])

  const GlobalState = { isLogin, setIsLogin, token, setToken, session, setSession, account, setAccount }
  return <GlobalContext.Provider value={GlobalState}>{children}</GlobalContext.Provider>
}

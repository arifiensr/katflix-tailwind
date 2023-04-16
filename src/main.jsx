import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalProvider } from './config/GlobalState'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import 'boxicons'
import './index.css'
import Movies from './pages/Movies'
import TVSeries from './pages/TVSeries'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/movies/',
    element: <Movies />,
  },
  {
    path: '/tvseries/',
    element: <TVSeries />,
  },
  {
    path: '/contact/',
    element: <Contact />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </React.StrictMode>
)

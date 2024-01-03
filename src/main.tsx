import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginPage from './pages/login'

import '@/styles/global.scss'

const App = () => {
  return <LoginPage />
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

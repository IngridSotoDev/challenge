import { Navigate, RouteObject } from 'react-router-dom'
import LoginPage from '@/pages/login'

function PublicRoutes(): RouteObject[] {
  return [
    { path: '/', element: <LoginPage /> },
    { path: '*', element: <Navigate to="/" replace /> },
  ]
}

export default PublicRoutes

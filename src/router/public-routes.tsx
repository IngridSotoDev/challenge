import { Navigate, RouteObject } from 'react-router-dom'
import LoginPage from '@/pages/login'
import SupplierPage from '@/pages/suppliers'

function PublicRoutes(): RouteObject[] {
  return [
    { path: '/', element: <LoginPage /> },
    {
      path: 'suppliers',
      element: <SupplierPage />,
    },
    { path: '*', element: <Navigate to="/" replace /> },
  ]
}

export default PublicRoutes

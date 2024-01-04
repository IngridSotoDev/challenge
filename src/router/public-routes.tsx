import { Navigate, RouteObject } from 'react-router-dom'
import LoginPage from '@/pages/login'
import SupplierPage from '@/pages/suppliers'
import SupplierDetailsPage from '@/pages/supplier-details'

function PublicRoutes(): RouteObject[] {
  return [
    { path: '/', element: <LoginPage /> },
    {
      path: '/suppliers',
      element: <SupplierPage />,
    },
    {
      path: '/suppliers/:id',
      element: <SupplierDetailsPage />,
    },
    { path: '*', element: <Navigate to="/" replace /> },
  ]
}

export default PublicRoutes

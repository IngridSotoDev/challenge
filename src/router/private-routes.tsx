import { Navigate, RouteObject } from 'react-router-dom'

import PrivateRoutesLayout from '@/layout/private-routes-layout'

import SuppliersPage from '@/pages/suppliers'
import SuppliersDetails from '@/pages/supplier-details'

function PrivateRoutes(): RouteObject {
  return {
    element: <PrivateRoutesLayout />,
    children: [
      { path: '/suppliers', element: <SuppliersPage /> },
      { path: '/suppliers/:supplierId', element: <SuppliersDetails /> },
      { path: '*', element: <Navigate to="/suppliers" replace /> },
    ],
  }
}

export default PrivateRoutes

import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

import PrivateRoutesLayout from '@/layout/private-routes-layout'

const SuppliersPage = lazy(() => import('@/pages/suppliers'))
const SuppliersDetails = lazy(() => import('@/pages/supplier-details'))

function PrivateRoutes() {
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

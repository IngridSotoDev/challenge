import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import useAuth from '@/hooks/useAuth'

import PublicRoutes from './public-routes'
import PrivateRoutes from './private-routes'

function Router() {
  const { token } = useAuth()

  const router = createBrowserRouter([
    token ? PrivateRoutes() : {},
    ...PublicRoutes(),
  ])

  return <RouterProvider router={router} />
}

export default Router

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PublicRoutes from './public-routes'

function Router() {
  const router = createBrowserRouter([...PublicRoutes()])
  return <RouterProvider router={router} />
}

export default Router

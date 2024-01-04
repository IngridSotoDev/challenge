import { Outlet } from 'react-router-dom'

export default function PrivateRoutesLayout() {
  return (
    <main>
      <Outlet />
    </main>
  )
}

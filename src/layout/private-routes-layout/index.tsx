import { Outlet } from 'react-router-dom'
import styles from './styles.scss'

export default function PrivateRoutesLayout() {
  return (
    <main className={styles['c-main']}>
      <Outlet />
    </main>
  )
}

import { Outlet } from 'react-router-dom'
import { useTheme } from '@/context/ThemeContext'

import styles from './styles.scss'

export default function PrivateRoutesLayout() {
  const { toggleTheme } = useTheme()

  return (
    <main className={styles['c-main']}>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <Outlet />
    </main>
  )
}

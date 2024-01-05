import { Outlet } from 'react-router-dom'
import { useTheme } from '@/context/ThemeContext'
import Switch from '@/components/switch'

import styles from './styles.scss'

export default function PrivateRoutesLayout() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <main className={styles['c-main']}>
      <Switch onChange={toggleTheme} checked={isDarkMode} />
      <Outlet />
    </main>
  )
}

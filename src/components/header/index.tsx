import { ReactNode } from 'react'
import styles from './styles.scss'

type HeaderProps = {
  actions?: ReactNode
  title: string
}

function Header({ title, actions }: Readonly<HeaderProps>) {
  return (
    <header className={styles['c-header']}>
      <h1 className={styles['c-header__title']}>{title}</h1>

      {actions ? (
        <div className={styles['c-header__actions']}>{actions}</div>
      ) : null}
    </header>
  )
}

export default Header

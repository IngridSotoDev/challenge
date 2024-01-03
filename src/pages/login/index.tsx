import { Input } from '@/components/input'
import styles from './styles.scss'

function LoginPage() {
  function onSubmit() {
    console.log('login')
  }

  return (
    <div className={styles['p-login']}>
      <div className={styles['p-login__form-wrapper']}>
        <h1 className={styles['p-login__form-title']}>Login</h1>
        <form className={styles['p-login__form']} onSubmit={onSubmit}>
          <Input placeholder="Username" type="text" />
          <Input placeholder="Password" type="password" />
          <button type="submit">Sign In</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage

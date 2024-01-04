import { useNavigate } from 'react-router-dom'
import Input from '@/components/input'
import Button from '@/components/button'
import styles from './styles.scss'

function LoginPage() {
  const navigate = useNavigate()
  function onSubmit() {
    navigate('/suppliers')
  }

  return (
    <div className={styles['p-login']}>
      <div className={styles['p-login__form-wrapper']}>
        <h1 className={styles['p-login__form-title']}>Login</h1>
        <form className={styles['p-login__form']} onSubmit={onSubmit}>
          <Input placeholder="Username" type="text" />
          <Input placeholder="Password" type="password" />
          <Button type="submit" className={styles['p-login__form--button']}>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage

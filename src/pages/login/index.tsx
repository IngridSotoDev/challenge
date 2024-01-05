import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

import useAuth from '@/hooks/useAuth'

import { signIn } from '@/services/authentication'

import Input from '@/components/input'
import Button from '@/components/button'

import styles from './styles.scss'

function LoginPage() {
  const navigate = useNavigate()
  const { setToken } = useAuth()

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData()
    formData.append('username', event.target[0].value)
    formData.append('password', event.target[1].value)
    formData.append('grant_type', 'password')
    formData.append('scope', 'web')

    signIn(formData)
      .then((response) => {
        const {
          data: { access_token, expires_in },
        } = response

        setToken(access_token, {
          maxAge: Number(expires_in),
          path: '/',
        })
        navigate('/suppliers')
      })
      .catch((error: AxiosError) => toast.error(error.message))
  }

  return (
    <div className={styles['p-login']}>
      <div className={styles['p-login__form-wrapper']}>
        <h1 className={styles['p-login__form-title']}>Login</h1>
        <form className={styles['p-login__form']} onSubmit={onSubmit}>
          <Input placeholder="Username" type="text" name="username" />
          <Input placeholder="Password" type="password" name="password" />
          <Button type="submit" className={styles['p-login__form--button']}>
            Sign In
          </Button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage

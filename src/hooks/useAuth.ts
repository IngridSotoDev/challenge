import { useCookies, ReactCookieProps } from 'react-cookie'

type SetOptions = ReactCookieProps['defaultSetOptions']

type AuthHook = {
  token: string | null
  setToken: (token: string, options?: SetOptions) => void
  removeToken: () => void
}

const useAuth = (): AuthHook => {
  const [cookies, setCookie] = useCookies(['auth_token'])

  const getToken = (): string => {
    return cookies.auth_token || null
  }

  const setToken = (token: string, options?: SetOptions): void => {
    setCookie('auth_token', token, { path: '/', ...options })
  }

  const removeToken = () => {
    setCookie('auth_token', '', { expires: new Date(0), path: '/' })
  }

  return {
    token: getToken(),
    setToken,
    removeToken,
  }
}

export default useAuth

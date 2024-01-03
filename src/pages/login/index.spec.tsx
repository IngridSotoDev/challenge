import { render } from '@testing-library/react'
import LoginPage from '.'

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
}))

describe('Login Page', () => {
  test('renders login form with inputs', () => {
    const { getByText, getByPlaceholderText } = render(<LoginPage />)

    expect(getByText('Login')).toBeInTheDocument()
    expect(getByPlaceholderText('Username')).toBeInTheDocument()
    expect(getByPlaceholderText('Password')).toBeInTheDocument()
  })
})

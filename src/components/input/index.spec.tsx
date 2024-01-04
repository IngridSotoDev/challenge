import { render, screen, fireEvent } from '@testing-library/react'
import Input  from './index'

describe('Input component', () => {
  test('should renders input with label correctly', () => {
    render(<Input label="Username" id="username" />)
    const inputElement = screen.getByLabelText('Username')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('id', 'username')
  })

  test('should renders input without label correctly', () => {
    render(<Input />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
  })

  test('should triggers onChange event', () => {
    const onChangeMock = jest.fn()
    render(<Input onChange={onChangeMock} />)
    const inputElement = screen.getByRole('textbox')
    fireEvent.change(inputElement, { target: { value: 'Test' } })
    expect(onChangeMock).toHaveBeenCalledTimes(1)
  })
})

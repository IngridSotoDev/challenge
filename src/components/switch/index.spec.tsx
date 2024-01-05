import { render, fireEvent } from '@testing-library/react'
import Switch from '.'

describe('toggle-switch', () => {
  it('calls onChange event handler when clicked', () => {
    const onChange = jest.fn()
    const { getByRole, getByText } = render(
      <Switch checked={false} onChange={onChange} />,
    )

    const switchButton = getByRole('checkbox')
    const labelText = getByText('Light Mode')

    fireEvent.click(switchButton)

    expect(onChange).toHaveBeenCalledTimes(1)
    expect(labelText).toBeInTheDocument()
  })

  it('should be checked', () => {
    const onChange = jest.fn()
    const { getByRole } = render(<Switch checked={false} onChange={onChange} />)

    const element = getByRole('checkbox')
    fireEvent.change(element, { target: { checked: true } })

    expect(element).toBeChecked()
  })

  it('should be unchecked', () => {
    const onChange = jest.fn()
    const { getByRole } = render(<Switch checked={true} onChange={onChange} />)

    const element = getByRole('checkbox')
    fireEvent.change(element, { target: { checked: false } })

    expect(element).not.toBeChecked()
  })
})

import { render } from '@testing-library/react'
import Button from '.'

describe('Button Component', () => {
  it('renders a primary button with text', () => {
    const { getByText } = render(<Button>Primary Button</Button>)
    const buttonElement = getByText('Primary Button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('primary')
  })

  it('renders a secondary button with custom class and disabled', () => {
    const { getByText } = render(
      <Button variant="secondary" className="custom-class" disabled>
        Secondary Button
      </Button>,
    )
    const buttonElement = getByText('Secondary Button')
    expect(buttonElement).toBeInTheDocument()
    expect(buttonElement).toHaveClass('secondary')
    expect(buttonElement).toHaveClass('custom-class')
    expect(buttonElement).toBeDisabled()
  })
})

import { render } from '@testing-library/react'
import Separator from '.'

describe('Separator Component', () => {
  it('renders the separator component', () => {
    const { container } = render(<Separator />)
    const separatorElement = container.querySelector('.c-separator')
    expect(separatorElement).toBeInTheDocument()
  })
})

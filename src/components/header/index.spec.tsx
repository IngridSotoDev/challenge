import React from 'react'
import { render } from '@testing-library/react'
import Header from '.'

describe('Header Component', () => {
  it('renders header with title', () => {
    const title = 'Test Header'
    const { getByText } = render(<Header title={title} />)
    const titleElement = getByText(title)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement.tagName).toBe('H1')
  })

  it('renders header with title and actions', () => {
    const title = 'Test Header'
    const actions = <button>Test Action</button>
    const { getByText } = render(<Header title={title} actions={actions} />)

    const titleElement = getByText(title)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement.tagName).toBe('H1')

    const actionButton = getByText('Test Action')
    expect(actionButton).toBeInTheDocument()
  })
})

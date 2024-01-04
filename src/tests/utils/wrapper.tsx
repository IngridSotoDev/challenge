import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
import { MemoryRouter } from 'react-router-dom'

const queryClient = new QueryClient()

type ProvidersProps = {
  path?: string
}

export const Providers = ({ path = '/' }: ProvidersProps) => {
  const Wrapper = ({ children }: PropsWithChildren) => {
    return (
      <QueryClientProvider client={queryClient}>
        <MemoryRouter initialEntries={[path]}>{children}</MemoryRouter>
      </QueryClientProvider>
    )
  }
  return Wrapper
}

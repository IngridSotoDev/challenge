import { render, fireEvent, waitFor } from '@testing-library/react'
import { UseQueryResult } from '@tanstack/react-query'
import { faker } from '@faker-js/faker'

import { update } from '@/services/supplier'

import { useQuerySupplier } from '@/hooks/queries/useQuerySupplier'

import { ISupplierModel } from '@/types/supplier'
import { IMessageErrorResponse } from '@/types/custom-queries'

import { Providers } from '@/tests/utils/wrapper'

import SupplierDetailsPage from '.'

jest.mock('@/services/supplier', () => ({
  update: jest.fn(),
}))

describe('SupplierDetailsPage Component', () => {
  it('renders loading state', () => {
    const mockReturnValue = {
      data: [],
      isLoading: true,
    } as UseQueryResult<ISupplierModel, IMessageErrorResponse>

    jest
      .spyOn(useQuerySupplier, 'useGetSupplierById')
      .mockReturnValue(mockReturnValue)

    const { getByText } = render(<SupplierDetailsPage />, {
      wrapper: Providers({ path: '/suppliers/123' }),
    })

    expect(getByText('carregando...')).toBeInTheDocument()
  })

  it('submits the form and updates data', async () => {
    const mockSupplierId = faker.string.uuid()
    const mockSupplier: ISupplierModel = {
      publicId: mockSupplierId,
      cnpj: faker.commerce.isbn(),
      address: faker.person.fullName(),
      city: faker.person.firstName(),
      complement: faker.string.numeric(),
      name: faker.company.name(),
      neighborhood: '',
      number: '',
      ownerEmail: '',
      ownerName: '',
      ownerPhoneNumber: '',
      phoneNumber: '',
      state: '',
      zipCode: '',
    }

    const mockReturnValue = {
      data: mockSupplier,
      isLoading: false,
      isSuccess: true,
    } as UseQueryResult<ISupplierModel, IMessageErrorResponse>

    jest
      .spyOn(useQuerySupplier, 'useGetSupplierById')
      .mockReturnValue(mockReturnValue)

    const { getByText } = render(<SupplierDetailsPage />, {
      wrapper: Providers({ path: '/suppliers/123' }),
    })

    fireEvent.click(getByText('Submit'))

    await waitFor(() => {
      expect(update).toHaveBeenCalledWith(mockSupplier)
    })
  })
})

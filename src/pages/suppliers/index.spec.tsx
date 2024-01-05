import { render, waitFor } from '@testing-library/react'
import { UseQueryResult } from '@tanstack/react-query'
import { faker } from '@faker-js/faker'

import { useQuerySupplier } from '@/hooks/queries/useQuerySupplier'

import { ISupplierModel } from '@/types/supplier'
import { IMessageErrorResponse } from '@/types/custom-queries'

import { Providers } from '@/tests/utils/wrapper'

import SupplierPage from '.'

describe('SupplierPage Component', () => {
  it('renders loading state', () => {
    const mockReturnValue = {
      data: [],
      isLoading: true,
    } as UseQueryResult<ISupplierModel[], IMessageErrorResponse>

    const useGetSuppliers = jest
      .spyOn(useQuerySupplier, 'useGetSuppliers')
      .mockReturnValue(mockReturnValue)

    const { getByText } = render(<SupplierPage />)

    expect(useGetSuppliers).toHaveBeenCalledTimes(1)
    expect(getByText('loading...')).toBeInTheDocument()
  })

  it('renders supplier table', async () => {
    const mockSuppliers: ISupplierModel[] = [
      {
        cnpj: faker.commerce.isbn(),
        name: faker.person.firstName(),
        phoneNumber: faker.number.int().toString(),
        ownerName: faker.person.firstName(),
      },
    ] as ISupplierModel[]

    const mockReturnValue = {
      data: mockSuppliers,
      isLoading: false,
    } as UseQueryResult<ISupplierModel[], IMessageErrorResponse>

    const useGetSuppliers = jest
      .spyOn(useQuerySupplier, 'useGetSuppliers')
      .mockReturnValue(mockReturnValue)

    const { getByText } = render(<SupplierPage />, { wrapper: Providers({}) })

    expect(useGetSuppliers).toHaveBeenCalledTimes(2)

    await waitFor(() => {
      expect(getByText('Suppliers')).toBeInTheDocument()
      expect(getByText('Name')).toBeInTheDocument()
      expect(getByText('CNPJ')).toBeInTheDocument()
      expect(getByText('Phone Number')).toBeInTheDocument()
      expect(getByText('Owner')).toBeInTheDocument()
    })

    mockSuppliers.forEach((supplier) => {
      expect(getByText(supplier.name)).toBeInTheDocument()
      expect(getByText(supplier.cnpj)).toBeInTheDocument()
      expect(getByText(supplier.phoneNumber)).toBeInTheDocument()
      expect(getByText(supplier.ownerName)).toBeInTheDocument()
    })
  })
})

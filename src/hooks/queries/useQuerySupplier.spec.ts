import { UseQueryResult } from '@tanstack/react-query'
import { renderHook } from '@testing-library/react'
import { faker } from '@faker-js/faker'

import { IMessageErrorResponse } from '@/types/custom-queries'
import { ISupplierModel } from '@/types/supplier'

import { useQuerySupplier } from './useQuerySupplier'

describe('useQuerySupplier', () => {
  it('should call `useGetSuppliers` and handle the returned data correctly', () => {
    const mockSuppliers: ISupplierModel[] = [
      { publicId: faker.string.uuid(), cnpj: faker.commerce.isbn() },
    ] as ISupplierModel[]

    const mockReturnValue = {
      data: mockSuppliers,
      isLoading: false,
      isSuccess: true,
    } as UseQueryResult<ISupplierModel[], IMessageErrorResponse>

    const useGetSuppliers = jest
      .spyOn(useQuerySupplier, 'useGetSuppliers')
      .mockReturnValue(mockReturnValue)

    const { result } = renderHook(() => useQuerySupplier.useGetSuppliers())

    expect(useGetSuppliers).toHaveBeenCalledTimes(1)
    expect(result.current.isSuccess).toBe(true)
    expect(result.current.isLoading).toBe(false)
    expect(result.current.data).toEqual(mockSuppliers)
  })

  it('should call `useGetSupplierById` and handle the returned data correctly', () => {
    const mockSupplierId = faker.string.uuid()
    const mockSupplier: ISupplierModel = {
      publicId: mockSupplierId,
      cnpj: faker.commerce.isbn(),
    } as ISupplierModel

    const mockReturnValue = {
      data: mockSupplier,
      isLoading: false,
      isSuccess: true,
    } as UseQueryResult<ISupplierModel, IMessageErrorResponse>

    const useGetSupplierById = jest
      .spyOn(useQuerySupplier, 'useGetSupplierById')
      .mockReturnValue(mockReturnValue)

    const { result } = renderHook(() =>
      useQuerySupplier.useGetSupplierById(mockSupplierId),
    )

    expect(useGetSupplierById).toHaveBeenCalledTimes(1)
    expect(result.current.isSuccess).toBe(true)
    expect(result.current.isLoading).toBe(false)
    expect(result.current.data).toEqual(mockSupplier)
  })

  describe('queryKeys', () => {
    it('returns the correct value for useGetSuppliers', () => {
      const expectedUseGetSuppliers = ['suppliers', 'load']
      const result = useQuerySupplier.queryKeys.useGetSuppliers()
      expect(result).toEqual(expectedUseGetSuppliers)
    })

    it('returns the correct value for useGetSupplierById', () => {
      const key = ['specificKey']
      const expectedUseGetSupplierById = ['suppliers', ...key]
      const result = useQuerySupplier.queryKeys.useGetSupplierById(key)
      expect(result).toEqual(expectedUseGetSupplierById)
    })
  })
})

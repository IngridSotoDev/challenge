import { useQuery, QueryKey } from '@tanstack/react-query'

import {
  CustomQueryOptions,
  IMessageErrorResponse,
} from '@/types/custom-queries'
import { ISupplierModel } from '@/types/supplier'
import { index, show } from '@/services/supplier'

const queryKeys = {
  all: ['suppliers'],
  useGetSuppliers: (): QueryKey => [...queryKeys.all, 'load'],
  useGetSupplierById: (key: QueryKey) => [...queryKeys.all, ...key] as const,
} as const

export const useGetSuppliers = (
  options?: CustomQueryOptions<ISupplierModel[]>,
) => {
  return useQuery<ISupplierModel[], IMessageErrorResponse>(
    queryKeys.useGetSuppliers(),
    () => index().then(({ data }) => data),
    {
      networkMode: 'always',
      ...options,
    },
  )
}

export const useGetSupplierById = (
  id: ISupplierModel['publicId'],
  options?: CustomQueryOptions<ISupplierModel>,
) => {
  return useQuery<ISupplierModel, IMessageErrorResponse>(
    queryKeys.useGetSupplierById([id]),
    () => show(id).then(({ data }) => data),
    {
      networkMode: 'always',
      ...options,
    },
  )
}

export const useQuerySupplier = {
  queryKeys,
  useGetSuppliers,
  useGetSupplierById,
}

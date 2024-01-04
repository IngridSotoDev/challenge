import { api } from '@/http/api'
import { SupplierModel } from '@/types/supplier'

const URL = '/suppliers'

export const index = () => {
  return api.get<SupplierModel[]>(`${URL}`)
}

export const show = (id: SupplierModel['publicId']) => {
  return api.get<SupplierModel>(`${URL}/${id}`)
}

export const update = (params: SupplierModel) => {
  return api.put<SupplierModel>(`${URL}`, params)
}

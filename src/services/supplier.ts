import { api } from '@/http/api'
import { ISupplierModel } from '@/types/supplier'

const URL = '/suppliers'

export const index = () => {
  return api.get<ISupplierModel[]>(`${URL}`)
}

export const show = (id: ISupplierModel['publicId']) => {
  return api.get<ISupplierModel>(`${URL}/${id}`)
}

export const update = (params: ISupplierModel) => {
  return api.put<ISupplierModel>(`${URL}`, params)
}

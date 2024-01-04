import { apiToken } from '@/http/api'
import {
  IAuthenticationModel,
  IAuthenticationParams,
} from '@/types/authentication'

const URL = '/oauth/token'

export const signIn = (params: IAuthenticationParams) => {
  return apiToken.post<IAuthenticationModel>(`${URL}`, params, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

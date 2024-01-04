import { UseQueryOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export type IMessageResponse = { message: string }

export type IMessageErrorResponse = AxiosError<IMessageResponse>

export type CustomQueryOptions<T> = Omit<
  UseQueryOptions<T, IMessageErrorResponse>,
  'initialData' | 'queryFn'
>

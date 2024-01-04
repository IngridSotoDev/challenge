import { UseQueryOptions, UseMutationOptions } from '@tanstack/react-query'
import { AxiosError } from 'axios'

export type IMessageErrorResponse = AxiosError

export type CustomQueryOptions<T> = Omit<
  UseQueryOptions<T, IMessageErrorResponse>,
  'initialData' | 'queryFn'
>

export type CustomMutationOptions<T, P> = Omit<
  UseMutationOptions<T, IMessageErrorResponse, P>,
  'mutationKey' | 'mutationFn'
>

import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { ISupplierModel } from '@/types/supplier'

import { update } from '@/services/supplier'

import { useQuerySupplier } from '@/hooks/queries/useQuerySupplier'

import Header from '@/components/header'
import Button from '@/components/button'
import Separator from '@/components/separator'
import {
  AddressInformation,
  OwnerInformation,
  SupplierInformation,
} from './components'

import styles from './styles.scss'

function SupplierDetailsPage() {
  const { supplierId } = useParams()
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { data: supplier, isLoading } =
    useQuerySupplier.useGetSupplierById(supplierId)

  const supplierForm = useForm<ISupplierModel>()

  const { handleSubmit, reset } = supplierForm

  const goBackNavigation = () => navigate(-1)

  const { mutate } = useMutation(update)

  function handleSupplierSubmit(data: ISupplierModel) {
    mutate(data, {
      onSuccess() {
        toast.success('Updated successfully!')
        queryClient.invalidateQueries([
          useQuerySupplier.queryKeys.useGetSuppliers,
        ])
        goBackNavigation()
      },
      onError(error: AxiosError) {
        toast.error(error.message)
      },
    })
  }

  useEffect(() => reset({ ...supplier }), [supplier, reset])

  if (isLoading) {
    return <>loading...</>
  }

  return (
    <form
      onSubmit={handleSubmit(handleSupplierSubmit)}
      className={styles['p-supplier-details__form']}
    >
      <Header
        title="Supplier Details"
        actions={
          <>
            <Button variant="secondary" onClick={goBackNavigation}>
              Cancel
            </Button>
            <Button onClick={goBackNavigation}>Submit</Button>
          </>
        }
      />

      <FormProvider {...supplierForm}>
        <SupplierInformation />
        <Separator />
        <OwnerInformation />
        <Separator />
        <AddressInformation />
      </FormProvider>
    </form>
  )
}

export default SupplierDetailsPage

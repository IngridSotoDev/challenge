import { useFormContext } from 'react-hook-form'
import Input from '@/components/input'
import styles from './styles.scss'

function SupplierInformation() {
  const { register } = useFormContext()

  return (
    <fieldset className={styles['c-input-container']}>
      <div className={styles['c-input-container__row']}>
        <Input
          id="name"
          label="Name"
          wrapperClassName={styles['c-input-container__col-7']}
          {...register('name')}
        />
        <Input
          id="cnpj"
          label="CNPJ"
          wrapperClassName={styles['c-input-container__col-5']}
          {...register('cnpj')}
        />
        <Input
          id="phoneNumber"
          label="Phone Number"
          wrapperClassName={styles['c-input-container__col-3']}
          {...register('phoneNumber')}
        />
      </div>
    </fieldset>
  )
}

export default SupplierInformation

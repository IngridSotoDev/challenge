import { useFormContext } from 'react-hook-form'
import Input from '@/components/input'
import styles from './styles.scss'

function AddressInformation() {
  const { register } = useFormContext()

  return (
    <fieldset className={styles['c-input-container']}>
      <legend>Address</legend>

      <div className={styles['c-input-container__row']}>
        <Input
          id="address"
          label="Address"
          wrapperClassName={styles['c-input-container__col-7']}
          {...register('address')}
        />
        <Input
          id="number"
          label="Number"
          wrapperClassName={styles['c-input-container__col-2']}
          {...register('number')}
        />
        <Input
          id="complement"
          label="Complement"
          wrapperClassName={styles['c-input-container__col-3']}
          {...register('complement')}
        />
        <Input
          id="neighborhood"
          label="Neighborhood"
          wrapperClassName={styles['c-input-container__col-3']}
          {...register('neighborhood')}
        />
        <Input
          id="city"
          label="City"
          wrapperClassName={styles['c-input-container__col-4']}
          {...register('city')}
        />
        <Input
          id="state"
          label="State"
          wrapperClassName={styles['c-input-container__col-2']}
          {...register('state')}
        />
        <Input
          id="zipCode"
          label="Zip Code"
          wrapperClassName={styles['c-input-container__col-3']}
          {...register('zipCode')}
        />
      </div>
    </fieldset>
  )
}

export default AddressInformation

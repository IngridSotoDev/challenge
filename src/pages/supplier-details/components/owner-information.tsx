import { useFormContext } from 'react-hook-form'
import Input from '@/components/input'
import styles from './styles.scss'

function OwnerInformation() {
  const { register } = useFormContext()

  return (
    <fieldset className={styles['c-input-container']}>
      <legend>Owner</legend>

      <div className={styles['c-input-container__row']}>
        <Input
          id="ownerName"
          label="Name"
          wrapperClassName={styles['c-input-container__col-7']}
          {...register('ownerName')}
        />
        <Input
          id="ownerEmail"
          label="Email"
          wrapperClassName={styles['c-input-container__col-5']}
          {...register('ownerEmail')}
        />
        <Input
          id="ownerPhoneNumber"
          label="Phone Number"
          wrapperClassName={styles['c-input-container__col-3']}
          {...register('ownerPhoneNumber')}
        />
      </div>
    </fieldset>
  )
}

export default OwnerInformation

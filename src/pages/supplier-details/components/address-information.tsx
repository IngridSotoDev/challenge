import Input from '@/components/input'
import styles from './styles.scss'

function AddressInformation() {
  return (
    <fieldset className={styles['c-input-container']}>
      <legend>Address</legend>

      <div className={styles['c-input-container__row']}>
        <Input
          label="Address"
          wrapperClassName={styles['c-input-container__col-7']}
        />
        <Input
          label="Number"
          wrapperClassName={styles['c-input-container__col-2']}
        />
        <Input
          label="Complement"
          wrapperClassName={styles['c-input-container__col-3']}
        />
        <Input
          label="Neighborhood"
          wrapperClassName={styles['c-input-container__col-3']}
        />
        <Input
          label="City"
          wrapperClassName={styles['c-input-container__col-4']}
        />
        <Input
          label="State"
          wrapperClassName={styles['c-input-container__col-2']}
        />
        <Input
          label="Zip Code"
          wrapperClassName={styles['c-input-container__col-3']}
        />
      </div>
    </fieldset>
  )
}

export default AddressInformation

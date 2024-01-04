import { Input } from '@/components/input'
import styles from './styles.scss'

function OwnerInformation() {
  return (
    <fieldset className={styles['c-input-container']}>
      <legend>Owner</legend>

      <div className={styles['c-input-container__row']}>
        <Input
          label="Name"
          wrapperClassName={styles['c-input-container__col-7']}
        />
        <Input
          label="Email"
          wrapperClassName={styles['c-input-container__col-5']}
        />
        <Input
          label="Phone Number"
          wrapperClassName={styles['c-input-container__col-3']}
        />
      </div>
    </fieldset>
  )
}

export default OwnerInformation

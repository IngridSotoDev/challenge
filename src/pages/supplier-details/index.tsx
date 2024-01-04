import { Input } from '@/components/input'
import styles from './styles.scss'
import { NavLink } from 'react-router-dom'
import Separator from '@/components/separator'

function SupplierDetailsPage() {
  return (
    <main className={styles['p-supplier-details']}>
      <header>
        <h1>Supplier Details</h1>

        <div className={styles['p-supplier-details__actions']}>
          <NavLink to="/suppliers">Cancel</NavLink>
          <button>Submit</button>
        </div>
      </header>

      <form>
        <fieldset className={styles['c-input-container']}>
          <div className={styles['c-input-container__row']}>
            <Input
              label="Name"
              wrapperClassName={styles['c-input-container__col-7']}
            />
            <Input
              label="CNPJ"
              wrapperClassName={styles['c-input-container__col-5']}
            />
            <Input
              label="Phone Number"
              wrapperClassName={styles['c-input-container__col-3']}
            />
          </div>
        </fieldset>

        <Separator />

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

        <Separator />

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
      </form>
    </main>
  )
}

export default SupplierDetailsPage

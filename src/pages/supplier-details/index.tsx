import { Input } from '@/components/input'
import styles from './styles.scss'
import { NavLink } from 'react-router-dom'

function SupplierDetailsPage() {
  return (
    <div className={styles['p-supplier-details']}>
      <header>
        <h1>Supplier Details</h1>

        <div className={styles['p-supplier-details__actions']}>
          <NavLink to="/suppliers">Cancel</NavLink>
          <button>Submit</button>
        </div>
      </header>

      <form>
        <Input label="Name" />
        <Input label="CNPJ" />
        <Input label="Phone Number" />

        <fieldset>
          <legend>Owner</legend>
          <Input label="Name" />
          <Input label="Email" />
          <Input label="Phone Number" />
        </fieldset>

        <fieldset>
          <legend>Address</legend>
          <Input label="Address" />
          <Input label="Number" />
          <Input label="Complement" />
          <Input label="Neighborhood" />
          <Input label="City" />
          <Input label="State" />
          <Input label="Zip Code" />
        </fieldset>
      </form>
    </div>
  )
}

export default SupplierDetailsPage

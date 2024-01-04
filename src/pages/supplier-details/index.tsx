import { useNavigate } from 'react-router-dom'
import Button from '@/components/button'
import Separator from '@/components/separator'
import OwnerInformation from './components/owner-information'
import AddressInformation from './components/address-information'
import SupplierInformation from './components/supplier-information'

import styles from './styles.scss'

function SupplierDetailsPage() {
  const navigate = useNavigate()

  const goBackNavigation = () => navigate(-1)

  return (
    <>
      <header className={styles['p-supplier-details__header']}>
        <h1>Supplier Details</h1>

        <div className={styles['p-supplier-details__actions']}>
          <Button variant="secondary" onClick={goBackNavigation}>
            Cancel
          </Button>
          <Button onClick={goBackNavigation}>Submit</Button>
        </div>
      </header>

      <form className={styles['p-supplier-details__form']}>
        <SupplierInformation />
        <Separator />
        <OwnerInformation />
        <Separator />
        <AddressInformation />
      </form>
    </>
  )
}

export default SupplierDetailsPage

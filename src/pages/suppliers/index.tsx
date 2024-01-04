import { useNavigate } from 'react-router-dom'
import Button from '@/components/button'
import styles from './styles.scss'

function SupplierPage() {
  const navigate = useNavigate()

  return (
    <>
      <header className={styles['p-suppliers__header']}>
        <h1>Suppliers</h1>
      </header>

      <table className={styles['p-suppliers__table']}>
        <thead>
          <tr>
            <th>Name</th>
            <th>CNPJ</th>
            <th>Phone Number</th>
            <th>Owner</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Distribuidora A</td>
            <td>99.999.999/9999-99</td>
            <td>(99) 99999-9999</td>
            <td>Elias</td>
            <td>
              <Button onClick={() => navigate('/suppliers/asdasdasdasd')}>
                Edit
              </Button>
            </td>
          </tr>
          <tr>
            <td>Distribuidora A</td>
            <td>99.999.999/9999-99</td>
            <td>(99) 99999-9999</td>
            <td>Elias</td>
            <td>
              <Button onClick={() => navigate('/suppliers/asdasdasdasd')}>
                Edit
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default SupplierPage

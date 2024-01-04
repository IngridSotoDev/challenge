import { NavLink } from 'react-router-dom'
import styles from './styles.scss'

function SupplierPage() {
  return (
    <main className={styles['p-suppliers']}>
      <header>
        <h1>Suppliers</h1>
      </header>

      <table>
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
              <NavLink
                className={styles['p-suppliers__navlink']}
                to={'/suppliers/asdasdasdasd'}
              >
                Edit
              </NavLink>
            </td>
          </tr>
          <tr>
            <td>Distribuidora A</td>
            <td>99.999.999/9999-99</td>
            <td>(99) 99999-9999</td>
            <td>Elias</td>
            <td>
              <NavLink
                className={styles['p-suppliers__navlink']}
                to={'/suppliers/asdasdasdasd'}
              >
                Edit
              </NavLink>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  )
}

export default SupplierPage

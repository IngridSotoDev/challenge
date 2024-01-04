import { NavLink } from 'react-router-dom'
import { useQuerySupplier } from '@/hooks/queries/useQuerySupplier'
import Header from '@/components/header'
import styles from './styles.scss'

function SupplierPage() {
  const { data, isLoading } = useQuerySupplier.useGetSuppliers()

  if (isLoading) {
    return <>carregando...</>
  }

  return (
    <>
      <Header title="Suppliers" />

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
          {data.map((supplier) => (
            <tr key={`supplier-${supplier.publicId}`}>
              <td>{supplier.name}</td>
              <td>{supplier.cnpj}</td>
              <td>{supplier.phoneNumber}</td>
              <td>{supplier.ownerName}</td>
              <td>
                <NavLink
                  className={styles['p-suppliers__table--button-edit']}
                  to={`/suppliers/${supplier.publicId}`}
                >
                  Edit
                </NavLink>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default SupplierPage

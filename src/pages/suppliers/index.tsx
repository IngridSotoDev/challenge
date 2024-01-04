import { useNavigate } from 'react-router-dom'
import { useQuerySupplier } from '@/hooks/queries/useQuerySupplier'
import Button from '@/components/button'
import styles from './styles.scss'

function SupplierPage() {
  const navigate = useNavigate()

  const { data, isLoading } = useQuerySupplier.useGetSuppliers()

  if (isLoading) {
    return <>carregando...</>
  }

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
          {data.map((supplier) => (
            <tr key={`supplier-${supplier.publicId}`}>
              <td>{supplier.name}</td>
              <td>{supplier.cnpj}</td>
              <td>{supplier.phoneNumber}</td>
              <td>{supplier.ownerName}</td>
              <td>
                <Button
                  onClick={() => navigate(`/suppliers/${supplier.publicId}`)}
                >
                  Edit
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default SupplierPage

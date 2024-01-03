import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import styles from './styles.scss'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: ReactNode
}

const Input = forwardRef<HTMLInputElement, InputProps>(function InputComponent(
  { label, ...rest },
  ref,
) {
  return (
    <div className={styles['c-input__wrapper']}>
      {!!label && (
        <label className={styles['c-input__wrapper__label']} htmlFor={rest.id}>
          {label}
        </label>
      )}
      <input ref={ref} {...rest} className={styles['c-input']} />
    </div>
  )
})

Input.displayName = 'Input'
export { Input }
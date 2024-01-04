import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import classNames from 'classnames'
import styles from './styles.scss'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: ReactNode
  wrapperClassName?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(function InputComponent(
  { label, wrapperClassName, className, ...rest },
  ref,
) {
  const wrapperClasses = classNames(
    styles['c-input__wrapper'],
    wrapperClassName,
  )
  const inputClasses = classNames(styles['c-input'], className)

  return (
    <div className={wrapperClasses}>
      {label ? (
        <label className={styles['c-input__wrapper--label']} htmlFor={rest.id}>
          {label}
        </label>
      ) : null}
      <input ref={ref} {...rest} className={inputClasses} />
    </div>
  )
})

Input.displayName = 'Input'
export default Input

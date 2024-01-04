import { ButtonHTMLAttributes, PropsWithChildren } from 'react'
import styles from './styles.scss'
import classNames from 'classnames'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary'
}

function Button({
  variant = 'primary',
  className,
  children,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  const defaultClasses = `${styles['c-button']} ${variant}`

  const buttonClasses = classNames(defaultClasses, className)

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  )
}

export default Button

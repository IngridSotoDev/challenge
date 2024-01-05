import styles from './styles.scss'

type SwitchProps = {
  onChange: () => void
  checked: boolean
}

function Switch({ checked, onChange }: Readonly<SwitchProps>) {
  return (
    <div className={styles['c-switch-container']}>
      <label className={styles['c-switch-container__label']}>
        <input
          type="checkbox"
          onChange={onChange}
          checked={checked}
          className={styles['c-switch']}
        />
        <span className={styles['c-slider']}></span>
      </label>
      <span className={styles['c-switch-container__text']}>
        {checked ? 'Dark' : 'Light'} Mode
      </span>
    </div>
  )
}

export default Switch

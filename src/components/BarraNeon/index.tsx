import styles from './BarraNeon.module.scss'

const BarraNeon = ({ className }: { className?: string }) => {
  return (
    <div className={`${styles.barraNeon} ${className}`}><div className={styles.box}></div></div>
  )
}

export default BarraNeon
import type { FC } from '@/types'
import { useGameContext } from '@/hooks'
import styles from './Footer.styles'

const Footer: FC = () => {
  const { restart, suggest } = useGameContext()

  return (
    <footer className={styles.wrapper}>
      <button type='button' onClick={restart} className={styles.button}>
        Restart
      </button>
      <button type='button' onClick={suggest} className={styles.button}>
        Suggest
      </button>
    </footer>
  )
}

export default Footer

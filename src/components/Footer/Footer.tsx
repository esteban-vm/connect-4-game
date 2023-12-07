import type { FC } from '@/types'
import { useGameContext } from '@/hooks'
import styles from './Footer.styles'

const Footer: FC = () => {
  const { restart, suggest, gameState } = useGameContext()
  const isPlaying = gameState === 'playing'

  return (
    <footer className={styles.wrapper}>
      <button type='button' onClick={isPlaying ? suggest : restart} className={styles.button}>
        {isPlaying ? 'Suggest' : 'Restart'}
      </button>
    </footer>
  )
}

export default Footer

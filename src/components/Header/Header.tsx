import type { FC } from '@/types'
import { useGameContext } from '@/hooks'
import styles from './Header.styles'

const Header: FC = () => {
  const { player, winner, gameState } = useGameContext()

  const label =
    gameState === 'playing'
      ? `Player ${player} Turn`
      : gameState === 'win'
      ? `Player ${winner} Wins!`
      : 'Game is a Draw!'

  return <header className={styles.wrapper}>{label}</header>
}

export default Header

import type { FC } from '@/types'
import { useGameContext } from '@/hooks'
import styles from './Header.styles'

const Header: FC = () => {
  const { player, winner, gameState } = useGameContext()

  const renderLabel = () => {
    switch (gameState) {
      case 'playing':
        return `Player ${player} Turn`
      case 'win':
        return `Player ${winner} Wins!`
      case 'draw':
        return 'Game is a Draw!'
    }
  }

  return <header className={styles.wrapper}>{renderLabel()}</header>
}

export default Header

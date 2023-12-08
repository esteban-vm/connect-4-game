import type { FC, Position, PlayerState } from '@/types'
import { useGameContext } from '@/hooks'
import styles from './Cell.styles'

interface CellProps {
  position: Position
  player: PlayerState
}

const Cell: FC<CellProps> = ({ position, player }) => {
  const { makeMove, gameState } = useGameContext()

  return (
    <button className={styles.wrapper(player)} onClick={() => makeMove(position)} disabled={gameState !== 'playing'} />
  )
}

export default Cell

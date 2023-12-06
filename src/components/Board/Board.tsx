import type { FC, Position } from '@/types'
import { useGameContext } from '@/hooks'
import CellUI from '../Cell'
import styles from './Board.styles'

const Board: FC = () => {
  const { board } = useGameContext()

  return (
    <div className={styles.wrapper}>
      {board.map((player, position) => (
        <CellUI key={crypto.randomUUID()} position={position as Position} player={player} />
      ))}
    </div>
  )
}

export default Board

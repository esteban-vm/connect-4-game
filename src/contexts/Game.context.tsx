import type { FC, ReactNode, PlayerState, GameState, Position } from '@/types'
import { createContext, useState } from 'react'
import { gameBoard } from '@/constants'
import { isWin, isDraw, makeComputedMove } from '@/utils'

interface IGameContext {
  board: PlayerState[]
  player: PlayerState
  winner: PlayerState
  gameState: GameState
  makeMove: (position: Position) => void
  restart: () => void
  suggest: () => void
}

const defaultValue: IGameContext = {
  board: Array<PlayerState>(gameBoard.length).fill(0),
  player: 1,
  winner: 0,
  gameState: 'playing',
  makeMove: () => {},
  restart: () => {},
  suggest: () => {},
}

const GameContext = createContext(defaultValue)

export const GameContextProvider: FC<{ children: ReactNode }> = (props) => {
  const [board, setBoard] = useState(defaultValue.board)
  const [player, setPlayer] = useState(defaultValue.player)
  const [winner, setWinner] = useState(defaultValue.winner)
  const [gameState, setGameState] = useState(defaultValue.gameState)

  const makeMove = (position: Position) => {
    if (board[position] !== 0 || gameState !== 'playing') return
    navigator.vibrate?.(10)

    const newBoard = board.map((previousPlayer, previousPosition) =>
      previousPosition === position ? player : previousPlayer
    )

    setBoard(newBoard)
    setPlayer(player === 1 ? 2 : 1)

    if (isWin(newBoard)) {
      setGameState('win')
      setWinner(player)
      return
    }

    if (isDraw(newBoard)) {
      setGameState('draw')
      setWinner(0)
    }
  }

  const restart = () => {
    setBoard(defaultValue.board)
    setPlayer(defaultValue.player)
    setWinner(defaultValue.winner)
    setGameState(defaultValue.gameState)
  }

  const suggest = () => {
    makeMove(makeComputedMove(board))
  }

  return <GameContext.Provider value={{ board, player, winner, gameState, makeMove, restart, suggest }} {...props} />
}

export default GameContext

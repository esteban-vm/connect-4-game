import type { PlayerState, Position } from '@/types'

type Line = [Position, Position, Position, Position]
type Move = { positions: Line; max: 4 | 16; step: 1 | 4 | 16 }

export const isWin = (board: PlayerState[], position: Position, player: PlayerState) => {
  board = [...board]
  board[position] = player

  const winningLines: Line[] = [
    [0, 1, 2, 3],
    [4, 5, 6, 7],
    [8, 9, 10, 11],
    [12, 13, 14, 15],
    [0, 4, 8, 12],
    [1, 5, 9, 13],
    [2, 6, 10, 14],
    [3, 7, 11, 15],
    [0, 5, 10, 15],
    [3, 6, 9, 12],
  ]

  for (const [c1, c2, c3, c4] of winningLines) {
    const { [c1]: b1, [c2]: b2, [c3]: b3, [c4]: b4 } = board
    if (b1 > 0 && b1 === b2 && b2 === b3 && b3 === b4) return true
  }

  return false
}

export const isDraw = (board: PlayerState[], position: Position, player: PlayerState) => {
  board = [...board]
  board[position] = player
  const count = board.reduce<number>((previousState, currentState) => +(currentState === 0) + previousState, 0)
  return count === 0
}

const getComputedMove = (board: PlayerState[]): Position | undefined => {
  const moves: Move[] = [
    // vertical
    {
      positions: [0, 4, 8, 12],
      max: 4,
      step: 1,
    },
    // horizontal
    {
      positions: [0, 1, 2, 3],
      max: 16,
      step: 4,
    },
    // diagonal from top left to bottom right
    {
      positions: [0, 5, 10, 15],
      max: 16,
      step: 16,
    },
    // diagonal from top right to bottom left
    {
      positions: [3, 6, 9, 12],
      max: 16,
      step: 16,
    },
  ]

  for (const { positions, max, step } of moves) {
    for (let index = 0; index < max; index += step) {
      const [position1, position2, position3, position4] = positions

      const newPosition1 = index + position1
      const newPosition2 = index + position2
      const newPosition3 = index + position3
      const newPosition4 = index + position4

      const {
        [newPosition1]: playerIn1,
        [newPosition2]: playerIn2,
        [newPosition3]: playerIn3,
        [newPosition4]: playerIn4,
      } = board

      const series = <const>`${playerIn1}${playerIn2}${playerIn3}${playerIn4}`

      switch (series) {
        case '0111':
        case '0222':
          return <Position>newPosition1
        case '1011':
        case '2022':
          return <Position>newPosition2
        case '1101':
        case '2202':
          return <Position>newPosition3
        case '1110':
        case '2220':
          return <Position>newPosition4
        default:
      }
    }
  }
}

const getRandomComputedMove = (board: PlayerState[]): Position => {
  const validPositions: Position[] = []

  for (let index = 0; index < board.length; index++) {
    if (board[index] === 0) {
      validPositions.push(<Position>index)
    }
  }

  const randomMove = Math.floor(Math.random() * validPositions.length)
  return validPositions[randomMove]
}

export const makeComputedMove = (board: PlayerState[]): Position => {
  const position = getComputedMove(board)
  if (position !== undefined) return position
  return getRandomComputedMove(board)
}

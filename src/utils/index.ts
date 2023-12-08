import type { PlayerState, Position } from '@/types'

type StateChecker = (board: PlayerState[]) => boolean
type MoveHandler<T extends boolean = true> = (board: PlayerState[]) => T extends true ? Position : Position | null
type Line = [Position, Position, Position, Position]

interface Move {
  positions: Line
  max: 4 | 16
  step: 1 | 4 | 16
}

export const isWin: StateChecker = (board) => {
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

  for (const [position1, position2, position3, position4] of winningLines) {
    const { [position1]: playerIn1, [position2]: playerIn2, [position3]: playerIn3, [position4]: playerIn4 } = board
    if (playerIn1 !== 0 && playerIn1 === playerIn2 && playerIn2 === playerIn3 && playerIn3 === playerIn4) {
      return true
    }
  }

  return false
}

export const isDraw: StateChecker = (board) => {
  const count = board.reduce<number>((previousState, currentState) => +(currentState === 0) + previousState, 0)
  return count === 0
}

const getComputedMove: MoveHandler<false> = (board) => {
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

  return null
}

const getRandomComputedMove: MoveHandler = (board) => {
  const validPositions: Position[] = []

  for (let index = 0; index < board.length; index++) {
    if (board[index] === 0) {
      validPositions.push(<Position>index)
    }
  }

  const randomMove = Math.floor(Math.random() * validPositions.length)
  return validPositions[randomMove]
}

export const makeComputedMove: MoveHandler = (board) => {
  const position = getComputedMove(board)
  if (position !== null) return position
  return getRandomComputedMove(board)
}

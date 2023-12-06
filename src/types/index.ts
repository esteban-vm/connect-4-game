export type { FC, ReactNode } from 'react'
export type Position = (typeof import('@/constants').gameBoard)[number]
export type PlayerState = 0 | 1 | 2
export type GameState = 'playing' | 'win' | 'draw'

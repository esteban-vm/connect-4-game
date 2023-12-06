import type { PlayerState } from '@/types'
import clsx from 'clsx'

const styles = {
  wrapper(player: PlayerState) {
    return clsx(
      player === 1 ? 'bg-red-500' : player === 2 ? 'bg-blue-500' : 'bg-white',
      'flex items-center justify-center rounded-full border-8 border-solid border-black transition-all',
      'enabled:hover:opacity-90 enabled:active:scale-90 disabled:opacity-70 pointer-coarse:border-4'
    )
  },
}

export default styles

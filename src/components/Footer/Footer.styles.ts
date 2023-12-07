import clsx from 'clsx'

const styles = {
  wrapper: clsx(
    'w-52 rounded-b-3xl border-8 border-t-0 border-solid',
    'border-amber-700 bg-amber-500 p-3 text-center font-bold text-white',
    'pointer-coarse:w-48 pointer-coarse:border-4 pointer-coarse:portrait:border-t-0',
    'pointer-coarse:landscape:rounded-l-none pointer-coarse:landscape:rounded-r-3xl pointer-coarse:landscape:border-l-0'
  ),
  button: clsx(
    'select-none rounded-lg border-2 border-solid px-3 py-1 uppercase transition-all',
    'hover:opacity-90 active:scale-90'
  ),
}

export default styles

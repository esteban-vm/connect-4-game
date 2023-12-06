import clsx from 'clsx'

const styles = {
  wrapper: clsx(
    'rounded-b-3xl border-8 border-t-0 border-solid border-amber-700 bg-amber-500 p-3 font-bold text-white',
    'pointer-coarse:border-4 pointer-coarse:portrait:border-t-0 pointer-coarse:landscape:rounded-l-none',
    'pointer-coarse:landscape:rounded-r-3xl pointer-coarse:landscape:border-l-0'
  ),
  button: clsx(
    'select-none rounded-lg border-2 border-solid px-2 py-1 uppercase transition-all',
    'first:mr-4 hover:opacity-90 active:scale-90'
  ),
}

export default styles

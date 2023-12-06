import clsx from 'clsx'

const styles = {
  wrapper: clsx(
    'rounded-t-3xl border-8 border-b-0 border-solid border-amber-700 bg-amber-500 p-4 font-bold uppercase text-white',
    'pointer-coarse:border-4 pointer-coarse:portrait:border-b-0 pointer-coarse:landscape:rounded-l-3xl',
    'pointer-coarse:landscape:rounded-r-none pointer-coarse:landscape:border-r-0'
  ),
}

export default styles

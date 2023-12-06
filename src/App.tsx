import type { FC } from 'react'
import { Header, Board, Footer } from '@/components'
import { GameContextProvider } from '@/contexts'

const App: FC = () => {
  return (
    <main>
      <GameContextProvider>
        <Header />
        <Board />
        <Footer />
      </GameContextProvider>
    </main>
  )
}

export default App

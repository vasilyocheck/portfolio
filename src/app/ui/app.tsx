import { Particle } from '@/components/particle/particle'
import { Header } from '@/layout/header/Header'
import { Main } from '@/layout/sections/main/Main'
import { Skills } from '@/layout/sections/skills/Skills'

export function App() {
  return (
    <div className={'App'}>
      <Particle />
      <Header />
      <Main />
      <Skills />
    </div>
  )
}

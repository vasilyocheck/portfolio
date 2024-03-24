import { Particle } from '@/components/particle/particle'
import { Header } from '@/layout/header/Header'
import { Main } from '@/layout/sections/main/Main'
import { Skills } from '@/layout/sections/skills/Skills'
import { Works } from '@/layout/sections/works/Works'

export function App() {
  return (
    <div className={'App'}>
      <Particle />
      <Header />
      <Main />
      <Skills />
      <Works />
    </div>
  )
}

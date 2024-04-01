import { GoTopBtn } from '@/components/go-top-btn/go-top-btn'
import { Particle } from '@/components/particle/particle'
import { Footer } from '@/layout/footer/footer'
import { Header } from '@/layout/header/header'
import { Contact } from '@/layout/sections/contact/contact'
import { Main } from '@/layout/sections/main/main'
import { Skills } from '@/layout/sections/skills/skills'
import { Slogan } from '@/layout/sections/slogan/slogan'
import { Testimony } from '@/layout/sections/testimony/testimony'
import { Works } from '@/layout/sections/works/works'

export function App() {
  return (
    <div className={'App'}>
      <Particle />
      <Header />
      <Main />
      <Skills />
      <Works />
      <Testimony />
      <Contact />
      <Slogan />
      <Footer />
      <GoTopBtn />
    </div>
  )
}

import { StrictMode } from 'react'

import { GlobalStyle } from '@/styles/Global.styled'
import { createRoot } from 'react-dom/client'

import { App } from './app/ui/app'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>
)

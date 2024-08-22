import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { Reset } from './styles/reset.ts'
import { Global } from './styles/global.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Reset />
      <Global />
      <App />
    </BrowserRouter>
  </StrictMode>,
)

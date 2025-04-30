import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, {Greeter} from './App.tsx'

console.log('Starting Application')


createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <App />
  // </StrictMode>,
)

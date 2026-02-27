import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// --- Favicon setup ---
import iconUrl from './assets/icon.png' // Vite will handle hashing in production

const link = document.createElement('link')
link.rel = 'icon'
link.href = iconUrl
document.head.appendChild(link)

// --- React render ---
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
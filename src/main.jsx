import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Footer from './assets/Sikayet/Sikayet.jsx'
import Sikayet from './assets/Sikayet/Sikayet.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sikayet />
  </StrictMode>,
)

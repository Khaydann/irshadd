import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
import Footer from './assets/Sual/Sikayet.jsx'
import Sikayet from './assets/Sual/Sikayet.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sikayet />
  </StrictMode>,
)

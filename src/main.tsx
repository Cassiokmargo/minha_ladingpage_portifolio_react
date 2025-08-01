import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/scrollbar"
import { register } from "swiper/element/bundle"

register();

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>    
    <App />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import HomeScreen from "./homescreen.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomeScreen />
  </StrictMode>,
)

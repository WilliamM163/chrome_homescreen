import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";

import HomeScreen from "./homescreen.jsx";
import Settings from "./components/settings.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/settings" element={<HomeScreen enableSettings={true}/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './pages/Index'
import NotFound from './pages/Notfound'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Index />} /> 
          <Route path="*" element={<NotFound />} /> 
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './pages/index.tsx'
import LayoutStudy from './pages/layoutStudy.tsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />}/>
        <Route path='layoutStudy' element={<LayoutStudy />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

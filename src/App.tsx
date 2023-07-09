import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Index from './pages/index.tsx'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Index />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Start from './pages/start/Start'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/start' element={<Start />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

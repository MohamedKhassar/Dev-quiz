import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Start from './pages/start/Start'
import Quiz from './pages/Quiz'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/start' exact element={<Start />}/>
      <Route path='/quiz' exact element={<Quiz />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

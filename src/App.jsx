import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Start from './pages/start/Start'
import Quiz from './pages/quiz/Quiz'
import Form from './pages/form/Form'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/form' exact element={<Form />}/>
      <Route path='/start' exact element={<Start />}/>
      <Route path='/quiz' exact element={<Quiz />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App

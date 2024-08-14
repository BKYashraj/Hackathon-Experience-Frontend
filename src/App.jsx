import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Challenges from './Pages/Challenges'

function App() {

  return (
    <>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/challenges" element={<Challenges />} />
     </Routes>
    </>
  )
}

export default App

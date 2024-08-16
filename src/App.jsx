import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Hackathon from './Pages/Hackathon'
import Research from './Pages/Research'

function App() {

  return (
    <>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/hackathon" element={<Hackathon />} />
       <Route path="/research" element={<Research />} />
     </Routes>
    </>
  )
}

export default App

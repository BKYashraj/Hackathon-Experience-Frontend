import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Hackathon from './Pages/hackathon/Hackathon'
import Research from './Pages/Research/Research'
import HackathonPost from './Pages/hackathon/HackathonPost'
import ResearchPost from './Pages/Research/ResearchPost'

function App() {

  return (
    <>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/hackathon" element={<Hackathon />} />
       <Route path="/research" element={<Research />} />
       <Route path="/hackathonPost" element={<HackathonPost />} />
       <Route path="/researchPost" element={<ResearchPost />} />
     </Routes>
    </>
  )
}

export default App

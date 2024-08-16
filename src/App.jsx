import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Hackathon from './Pages/hackathon/Hackathon'
import Research from './Pages/Research/Research'
import HackathonPost from './Pages/hackathon/HackathonPost'
import ResearchPost from './Pages/Research/ResearchPost'
import Signup from './Pages/Auth/Signup'
import Login from './Pages/Auth/Login'
import NotFound from './Pages/NotFound'

function App() {

  return (
    <>
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/hackathon" element={<Hackathon />} />
       <Route path="/research" element={<Research />} />
       <Route path="/hackathonPost" element={<HackathonPost />} />
       <Route path="/researchPost" element={<ResearchPost />} />

       <Route path="/auth/signup" element={<Signup/>} />
       <Route path="/auth/login" element={<Login/>} />

       <Route path="*" element={<NotFound/>} />
     </Routes>
    </>
  )
}

export default App

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Hackathon from "./Pages/hackathon/Hackathon";
import Research from "./Pages/Research/Research";
import HackathonPost from "./Pages/hackathon/HackathonPost";
import ResearchPost from "./Pages/Research/ResearchPost";
import Signup from "./Pages/Auth/Signup";
import Login from "./Pages/Auth/Login";
import NotFound from "./Pages/NotFound";
import ViewPageHack from "./Pages/hackathon/ViewPageHack";
import HackInside from "./Pages/hackathon/HackInside";
import RequireAuth from "./Components/Auth/RequireAuth";
import ViewMorePage from "./Pages/Research/ViewMorePage";
import Profile from "./Pages/Auth/Profile";
import EditSelfHackPost from "./Pages/Auth/Hackathon CRUD/EditSelfHackPost";
import EditHack from "./Pages/Auth/Hackathon CRUD/EditHack";
import InsideResearch from "./Pages/Research/insideResearch";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/research" element={<Research />} />

        <Route path="/hackPage" element={<ViewPageHack />} />
        <Route path="/researchPage" element={<ViewMorePage />} />

        <Route path="/auth/signup" element={<Signup />} />
        <Route path="/auth/login" element={<Login />} />

        <Route element={<RequireAuth />}>
          <Route path="/auth/profile" element={<Profile />} />
          <Route path="/hackPage/:hackId" element={<HackInside />} />
          <Route path="/ReserachPaper/:hackId" element={<InsideResearch />} />
          <Route path="/hackathonPost" element={<HackathonPost />} />
          <Route path="/researchPost" element={<ResearchPost />} />
          <Route path="/hackathonpost/edit/:hackId" element={<EditSelfHackPost />} />
          <Route path="/hackathon/edit/:id" element={<EditHack />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

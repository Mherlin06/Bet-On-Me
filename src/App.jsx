import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./Layout/Layout";
import Error from "./pages/Error/Error";
import Index from "./pages/Index/Index";
import Experiences from "./pages/Experiences/Experiences";
import SoftSkills from "./pages/SoftSkills/SoftSkills";
import HardSkills from "./pages/HardSkills/HardSkills";
import Tools from "./pages/Tools/Tools";
import Hobby from "./pages/Hobby/Hobby";
import Missions from "./pages/Missions/Missions";
import CoursePage from "./pages/CoursePage/CoursePage";
import Course from "./pages/Course/Course";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<Error />}>
          <Route errorElement={<Error />}>
            <Route index element={<Index />} />
            <Route path="formations" element={<CoursePage />} />
            <Route path="formations/:id" element={<Course />} />
            <Route path="experiences" element={<Experiences />} />
            <Route path="experiences/:id" element={<Missions />} />
            <Route path="softskills" element={<SoftSkills />} />
            <Route path="hardskills" element={<HardSkills />} />
            <Route path="outils" element={<Tools />} />
            <Route path="hobby" element={<Hobby />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./Layout/Layout";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import Experiences from "./pages/Experiences/Experiences";
import Error from "./pages/Error/Error";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/formations" element={<Courses />} />
          <Route exact path="/experiences" element={<Experiences/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

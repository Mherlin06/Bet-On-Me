import { Routes, Route, BrowserRouter } from "react-router-dom";

import Layout from "./Layout/Layout";
import Index from "./pages/Index/Index";
import Courses from "./pages/Courses/Courses";
import Experiences from "./pages/Experiences/Experiences";
import Error from "./pages/Error/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<Error />}>
          <Route errorElement={<Error />}>
            <Route index element={<Index />} />
            <Route path="formations" element={<Courses />} />
            <Route path="experiences" element={<Experiences />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

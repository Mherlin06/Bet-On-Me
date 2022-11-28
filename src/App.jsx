import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Layout } from "./Layout/Layout";

function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route exact path="/"/>
      </Routes>
    </Layout>
    </BrowserRouter>
  );
}

export default App;

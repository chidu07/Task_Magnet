import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./component/Layout";
import Home from "./component/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/home" element={<Home />} />

          {/* <Route path="/layout" element={<Layout />} /> */}
          {/* <Route path="/home" element={<Layout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add" element={<Addtask />} />
          <Route path="/update" element={<Update />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

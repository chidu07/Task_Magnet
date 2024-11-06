import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Addtask from "./component/Addtask";
import Viewtask from "./component/Viewtask";
import Subtask from "./component/Subtask";
import Profile from "./component/Profile";
import Login from "./component/Login";
import Sighnin from "./component/Sighnin";
import Addemp from "./component/Addemp";
import Home from "./user/Home";
import Userviewtask from "./user/Userviewtask";
import Updatetask from "./user/Updatetask";
import Empupdate from "./component/Empupdate";
import About from "./component/About";
import Contact from "./component/Contact";
import Logout from "./component/Logout";
import Logo from "./component/Logo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/layout" element={<Layout />} />
          <Route path="/addtask" element={<Addtask />} />
          <Route path="/viewtask" element={<Viewtask />} />
          <Route path="/subtask" element={<Subtask />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sighnin" element={<Sighnin />} />
          <Route path="/addemp" element={<Addemp />} />
          <Route path="/home" element={<Home />} />
          <Route path="/userview" element={<Userviewtask />} />
          <Route path="/updatetask" element={<Updatetask />} />
          <Route path="/updateemp" element={<Empupdate />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/logout" element={<Logo />} />

          {/* <Route path="/home" element={<Layout />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/add" element={<Addtask />} />
          <Route path="/update" element={<Update />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

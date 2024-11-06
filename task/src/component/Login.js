import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const API_URL = "http://localhost:8000";

export default function Login() {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [error, setError] = useState("");
  const [role, setrole] = useState("");
  const history = useNavigate();
  // const [task, settask] = useState([]);
  // const [value,setvalue] = useState({
  //   email:"",
  //   pass:""
  // })

  const handlesubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/logg", {
        email,
        pass,
        role,
      });
      // .then((res) => {
      //   if (res.data.success) {
      //     Navigate("/layout");
      //   } else {
      //     alert("Login failed");
      //   }
      //   console.log(res);
      // })
      if (response.data.success) {
        if (role === "admin") {
          // Redirect to admin page
          //console.log("Admin login successful");
          history("/layout");
          alert("Admin login successful");
        } else {
          // Redirect to user page
          history("/home");
          alert("User Login Successful");
        }
      } else {
        setError(response.data.message);
        alert("give proper email and password");
        setemail("");
        setpass("");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred while logging in");
    }
  };

  // const [backemail, setbackemail] = useState("");
  // const [backpass, setbackpass] = useState("");
  // useEffect(() => {
  //   fetch("http://localhost:8000/api/logg")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data.success) {
  //         settask(data.data);
  //       } else {
  //         console.error(data.message);
  //       }
  //     })
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);
  // console.log(task.email);
  // task.map((i) => console.log(i.email, i.password));
  // const handlesubmit = async (e) => {
  //   e.preventDefault();
  // if (!validate(email, pass)) {
  //   return alert("Validation Failed");
  // }
  //

  return (
    <section className="vh-100 gradient-custom">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="email"
                      id="typeEmailX"
                      className="form-control form-control-lg"
                      value={email}
                      onChange={(e) => {
                        setemail(e.target.value);
                      }}
                    />
                    <label className="form-label" htmlFor="typeEmailX">
                      Email
                    </label>
                  </div>
                  <div className="form-outline form-white mb-4">
                    <input
                      type="password"
                      id="typePasswordX"
                      className="form-control form-control-lg"
                      value={pass}
                      onChange={(e) => {
                        setpass(e.target.value);
                      }}
                    />
                    <label className="form-label" htmlFor="typePasswordX">
                      Password
                    </label>
                  </div>
                  {/* <p className="small mb-5 pb-lg-2">
                  <a className="text-white-50" href="#!">
                    Forgot password?
                  </a>
                </p> */}
                  {/* <Link to="/layout">
                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Login
                    </button>
                    
                  </Link> */}

                  <div>
                    <label>
                      <input
                        type="radio"
                        value="admin"
                        checked={role === "admin"}
                        onChange={() => setrole("admin")}
                      />{" "}
                      Admin
                    </label>
                    <label>
                      <input
                        type="radio"
                        value="user"
                        checked={role === "user"}
                        onChange={() => setrole("user")}
                      />{" "}
                      User
                    </label>
                  </div>
                  <button
                    className="btn btn-outline-light btn-lg px-5"
                    type="submit"
                    onClick={handlesubmit}
                  >
                    Login
                  </button>

                  {/* <div className="d-flex justify-content-center text-center mt-4 pt-1">
                  <a href="#!" className="text-white">
                    <i className="fab fa-facebook-f fa-lg" />
                  </a>
                  <a href="#!" className="text-white">
                    <i className="fab fa-twitter fa-lg mx-4 px-2" />
                  </a>
                  <a href="#!" className="text-white">
                    <i className="fab fa-google fa-lg" />
                  </a>
                </div> */}
                </div>
                <div>
                  <p className="mb-0">
                    Don't have an account?{" "}
                    <Link to="/sighnin">
                      {" "}
                      <a href="#!" className="text-white-50 fw-bold">
                        Sign Up
                      </a>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

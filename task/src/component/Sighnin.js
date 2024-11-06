import React, { useState } from "react";
// import { Link } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Sighnin() {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [role, setrole] = useState("");
  const history = useNavigate();

  // const [user, setuser] = useState("")
  // console.log("pass", pass);
  // const path = "";

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("Data to be sent:", { email, pass, role });
    try {
      const response = await axios.post("http://localhost:8000/api/signup", {
        email: email,
        password: pass,
        role: role,
      });
      history("/");

      // .catch((err) => console.log(err));

      console.log(response.data);
      setemail("");
      setpass("");
      setrole("");
      alert("Register successful");
    } catch (error) {
      console.error("Error signing up:", error.response.data);
    }
  };
  return (
    <>
      {/* Design by foolishdeveloper.com */}
      <title>Glassmorphism login Form Tutorial in html css</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      {/* <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  />
  <link
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap"
    rel="stylesheet"
  /> */}
      {/*Stylesheet*/}
      <style
        media="screen"
        dangerouslySetInnerHTML={{
          __html:
            "\n      *,\n*:before,\n*:after{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n}\nbody{\n    background-color: #080710;\n}\n.background{\n    width: 430px;\n    height: 520px;\n    position: absolute;\n    transform: translate(-50%,-50%);\n    left: 50%;\n    top: 50%;\n}\n.background .shape{\n    height: 200px;\n    width: 200px;\n    position: absolute;\n    border-radius: 50%;\n}\n.shape:first-child{\n    background: linear-gradient(\n        #1845ad,\n        #23a2f6\n    );\n    left: -80px;\n    top: -80px;\n}\n.shape:last-child{\n    background: linear-gradient(\n        to right,\n        #ff512f,\n        #f09819\n    );\n    right: -30px;\n    bottom: -80px;\n}\nform{\n    height: 520px;\n    width: 400px;\n    background-color: rgba(255,255,255,0.13);\n    position: absolute;\n    transform: translate(-50%,-50%);\n    top: 50%;\n    left: 50%;\n    border-radius: 10px;\n    backdrop-filter: blur(10px);\n    border: 2px solid rgba(255,255,255,0.1);\n    box-shadow: 0 0 40px rgba(8,7,16,0.6);\n    padding: 50px 35px;\n}\nform *{\n    font-family: 'Poppins',sans-serif;\n    color: #ffffff;\n    letter-spacing: 0.5px;\n    outline: none;\n    border: none;\n}\nform h3{\n    font-size: 32px;\n    font-weight: 500;\n    line-height: 42px;\n    text-align: center;\n}\n\nlabel{\n    display: block;\n    margin-top: 30px;\n    font-size: 16px;\n    font-weight: 500;\n}\ninput{\n    display: block;\n    height: 50px;\n    width: 100%;\n    background-color: rgba(255,255,255,0.07);\n    border-radius: 3px;\n    padding: 0 10px;\n    margin-top: 8px;\n    font-size: 14px;\n    font-weight: 300;\n}\n::placeholder{\n    color: #e5e5e5;\n}\nbutton{\n    margin-top: 50px;\n    width: 100%;\n    background-color: #ffffff;\n    color: #080710;\n    padding: 15px 0;\n    font-size: 18px;\n    font-weight: 600;\n    border-radius: 5px;\n    cursor: pointer;\n}\n.social{\n  margin-top: 30px;\n  display: flex;\n}\n.social div{\n  background: red;\n  width: 150px;\n  border-radius: 3px;\n  padding: 5px 10px 10px 5px;\n  background-color: rgba(255,255,255,0.27);\n  color: #eaf0fb;\n  text-align: center;\n}\n.social div:hover{\n  background-color: rgba(255,255,255,0.47);\n}\n.social .fb{\n  margin-left: 25px;\n}\n.social i{\n  margin-right: 4px;\n}\n\n    ",
        }}
      />
      <div className="background">
        <div className="shape" />
        <div className="shape" />
      </div>
      <form onSubmit={handleSignup}>
        <h3>Register Here</h3>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="Email or Phone"
          id="username"
          value={email}
          onChange={(e) => {
            setemail(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          value={pass}
          onChange={(e) => {
            setpass(e.target.value);
          }}
        />
        {/* <label htmlFor="username">Role</label> */}
        <div
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio1"
            autoComplete="off"
            defaultChecked=""
            value="admin"
            onChange={(e) => {
              setrole(e.target.value);
            }}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio1">
            Admin
          </label>
          <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
            value="user"
            onChange={(e) => {
              setrole(e.target.value);
            }}
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio2">
            User
          </label>
          {/* <input
            type="radio"
            className="btn-check"
            name="btnradio"
            id="btnradio3"
            autoComplete="off"
            value="user"
            onChange={(e) => {
              setrole(e.target.value);
            }}
          /> */}
        </div>

        <button type="submit">Sign Up</button>
        {/* <div className="social">
      <div className="go">
        <i className="fab fa-google" /> Google
      </div>
      <div className="fb">
        <i className="fab fa-facebook" /> Facebook
      </div>
    </div> */}
      </form>
    </>
  );
}

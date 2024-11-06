import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Addemp() {
  const [id, setid] = useState("");
  const [name, setname] = useState("");
  const history = useNavigate();
  // const [ename, setename] = useState("");

  const [tasks, setTasks] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState("");

  const handleSelectEmployee = (ename) => {
    setSelectedEmployee(ename);
  };

  useEffect(() => {
    setid(localStorage.getItem("id"));
    setname(localStorage.getItem("name"));
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/api/addemp")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setTasks(data.data);
        } else {
          console.error(data.message);
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("Data to be sent:", { id, name, selectedEmployee });
    try {
      const response = await axios.post(
        "http://localhost:8000/api/updatedriver",
        {
          tid: id,
          tname: name,
          ename: selectedEmployee,
        }
      );
      history("/viewtask");

      // .then((res) => history("/"));

      console.log(response.data);
      setname("");
      setSelectedEmployee("");
      // setedate("");
      // if (response && response.data) {
      //   console.log(response.data);
      // } else {
      //   console.error("Error: No response data received");
      // }
      alert("Employee Assigned successfully");
    } catch (error) {
      console.error("Error add task:", error.response.data);
    }
  };
  return (
    <form onSubmit={handlesubmit}>
      <div className="back">
        <div className="container" id="addsub">
          <div className="mb-3 " id="task">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Task
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />
          </div>
          <div className="mb-3 " id="task"></div>
          <div className="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle "
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Employees
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                {tasks.map((t, index) => (
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleSelectEmployee(t.ename)}
                  >
                    {t.ename}
                  </a>
                ))}
              </li>
            </ul>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              value={selectedEmployee}
            />
          </div>

          <br></br>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn btn-primary btn-lg">
              Assign Employee
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

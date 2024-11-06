import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Updatetask() {
  const [id, setid] = useState("");
  const [taskname, settaskname] = useState("");
  const [emp, setemp] = useState("");
  const [upadtetask, setupadtetask] = useState("");
  const history = useNavigate();
  useEffect(() => {
    setid(localStorage.getItem("id"));
    settaskname(localStorage.getItem("taskname"));
    setemp(localStorage.getItem("emp"));
  }, []);
  //   console.log(id, taskname, emp);

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("Data to be sent:", { id, taskname, emp, upadtetask });
    try {
      const response = await axios.post("http://localhost:8000/api/ut", {
        tid: id,
        tname: taskname,
        ename: emp,
        updatedetails: upadtetask,
      });
      history("/userview");

      // .then((res) => history("/"));

      console.log(response.data);
      settaskname("");
      setemp("");
      setupadtetask("");
      alert("Employee Updated successfully");
      // setedate("");
      // if (response && response.data) {
      //   console.log(response.data);
      // } else {
      //   console.error("Error: No response data received");
      // }
    } catch (error) {
      console.error("Error add task:", error.response.data);
    }
  };
  return (
    <div>
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
                value={taskname}
                onChange={(e) => settaskname(e.target.value)}
              />
            </div>
            <div className="mb-3 " id="task">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Employee Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={emp}
                onChange={(e) => setemp(e.target.value)}
                // value={name}
                // onChange={(e) => setname(e.target.value)}
              />
            </div>
            <div className="mb-3 " id="task">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Update About Task
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                value={upadtetask}
                onChange={(e) => setupadtetask(e.target.value)}
              />
            </div>

            <div className="mb-3 " id="task"></div>
            {/* <div className="dropdown">
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
          </div> */}

            <br></br>
            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary btn-lg">
                Update Task
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

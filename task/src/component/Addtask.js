import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Addtask() {
  const [task, settask] = useState("");
  const [sdate, setsdate] = useState("");
  const [edate, setedate] = useState("");
  const history = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log("Data to be sent:", { task, sdate, edate });
    try {
      const response = await axios.post("http://localhost:8000/api/addtask", {
        tname: task,
        startdate: sdate,
        enddate: edate,
      });
      // history("/layout");

      // .then((res) => history("/"));

      console.log(response.data);
      settask("");
      setsdate("");
      setedate("");
      // if (response && response.data) {
      //   console.log(response.data);
      // } else {
      //   console.error("Error: No response data received");
      // }
      alert("task added successfully");
    } catch (error) {
      console.error("Error add task:", error.response.data);
    }
  };

  return (
    <form onSubmit={handlesubmit}>
      <div className="back">
        <div className="container" id="add">
          <div className="mb-3 " id="task">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Enter Task
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              value={task}
              onChange={(e) => {
                settask(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Starting Date
            </label>
            <input
              type="date"
              className="form-control"
              value={sdate}
              onChange={(e) => {
                setsdate(e.target.value);
              }}
              required
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              End Date
            </label>
            <input
              type="date"
              className="form-control"
              value={edate}
              onChange={(e) => {
                setedate(e.target.value);
              }}
              required
            />
          </div>

          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              // onClick={handlesubmit}
            >
              Add Task
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

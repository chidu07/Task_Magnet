import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Viewtask() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/index")
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

  const settolocalstorage = (tid, tname) => {
    localStorage.setItem("id", tid);
    localStorage.setItem("name", tname);
  };

  return (
    <div className="back">
      <div className="container d-flex justify-content-center bg-dark ">
        <table className="table text-white">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Task</th>
              <th scope="col">StartDate</th>
              <th scope="col">Enddate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index}>
                <th scope="row">{task.tid}</th>
                <td>{task.tname}</td>
                <td>{task.startdate}</td>
                <td>{task.enddate}</td>
                {/* <td>
                  <button type="button" className="btn btn-success">
                    Edit Task
                  </button>
                </td> */}
                <td>
                  <Link to="/addemp">
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => settolocalstorage(task.tid, task.tname)}
                    >
                      Assign Employee
                    </button>
                  </Link>
                </td>
                {/* <td>
                  <button type="button" className="btn btn-danger">
                    Delete Task
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

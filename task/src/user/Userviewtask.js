import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default function Userviewtask() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/uvm")
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

  const settolocalstorage = (tid, tname, ename) => {
    localStorage.setItem("id", tid);
    localStorage.setItem("taskname", tname);
    localStorage.setItem("emp", ename);
  };

  return (
    <div>
      <div className="back">
        <div className="container d-flex justify-content-center bg-dark ">
          <table className="table text-white">
            <thead>
              <tr>
                <th scope="col">Task Id</th>

                <th scope="col">Task Name</th>
                <th scope="col">Assigned Employee Name</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <th scope="row">{task.tid}</th>
                  <td>{task.tname}</td>
                  <td>{task.ename}</td>

                  <td>
                    <Link to="/updatetask">
                      {" "}
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() =>
                          settolocalstorage(task.tid, task.tname, task.ename)
                        }
                      >
                        Updating Task
                      </button>
                    </Link>
                  </td>
                  {/* <td>
                  <Link to="/addemp">
                    <button
                      type="button"
                      className="btn btn-success"
                      onClick={() => settolocalstorage(task.tid, task.tname)}
                    >
                      Assign Employee
                    </button>
                  </Link>
                </td> */}
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
    </div>
  );
}

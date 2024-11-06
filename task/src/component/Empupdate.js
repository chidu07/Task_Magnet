import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Empupdate() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/eu")
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
                <th scope="col">updated Details</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task, index) => (
                <tr key={index}>
                  <th scope="row">{task.tid}</th>
                  <td>{task.tname}</td>
                  <td>{task.ename}</td>
                  <td>{task.updatedetails}</td>

                  {/* <td>
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
                  </td> */}
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

import React from "react";

export default function Subtask() {
  return (
    <div>
      <div className="back">
        <div className="container" id="addsub">
          <div className="mb-3 " id="task">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Task
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          {/* <div className="mb-3 ">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Sub-Task
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div> */}

          {/* <div className="dropdown">
            <a
              className="btn btn-secondary dropdown-toggle "
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select SubTask
            </a>
          
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
            </ul>
           
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div> */}
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
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
            </ul>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
         

         
         
          <br></br>
          <div className="d-flex justify-content-center">
            <button type="button" className="btn btn-primary btn-lg">
              Add Sub-Task
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

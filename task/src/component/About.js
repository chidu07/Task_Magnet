import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

export default function About() {
  return (
    <section id="about" className="mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="mb-4">
              <center><b>About Task Magnet</b></center>
            </h1>
            <p className="lead">
              Welcome to Task Magnate, the pinnacle of task organization and
              productivity. Task Magnate is not just a platform; it's a dynamic
              tool designed to empower individuals and teams to conquer their
              daily tasks with efficiency and precision. Task Magnate goes
              beyond traditional task management. It's a comprehensive solution
              that allows you to create, organize, and prioritize tasks
              effortlessly{" "}
            </p>
          </div>
        </div>
        <div className="row mt-4">
          <img
            src="logo1.webp"
            alt="k"
            className="img-fluid rounded mb-3"
            style={{ width: "660px", height: "300px" }}
          />
          <img
            src="logo2.png"
            alt="j"
            className="img-fluid rounded"
            style={{ width: "660px", height: "280px" }}
          />
          <hr />
          <div className="col-md-4">
            <center>
              <h4>Step 1</h4>
            </center>
            <center>
              {" "}
              <p>Create Tasks</p>
            </center>
            <p>
              Effortlessly create tasks with a user-friendly interface. Add
              details, due dates, and priorities to stay organized.
            </p>
          </div>
          <div className="col-md-4">
          <center> <h4>Step 2</h4></center>
          <center> <p>Customize Tasks</p></center>
            <p>
              Organize your tasks with subtasks. Tailor the platform to fit your
              unique workflow.
            </p>
          </div>
          <div className="col-md-4">
          <center><h4>Step 3</h4></center>
          <center> <p>Day-to-Day Update</p></center>
            <p>
              Devide the task between multiple employees or users and get update
              from them daily
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div>
      <center> <img
          src="logo4.png"
          alt="k"
          className="img-fluid rounded mb-3"
          style={{ width: "660px", height: "300px" }}
        /></center>
       <center> <p>
          Gain valuable insights into task progress and performance with Task
          Magnate's reporting and analytics features.
          <br /> Track completion rates, monitor productivity trends, and make
          data-driven decisions to enhance overall efficiency.
        </p></center>
      </div>
      <br />
      <br />
      <div>
      <center> <img
          src="logo3.png"
          alt="j"
          className="img-fluid rounded"
          style={{ width: "660px", height: "300px" }}
        /></center>
       <center> <p>
          {" "}
          Join a thriving community of Task Magnate users and access support
          resources.
          <br /> Stay informed about updates, share best practices, and receive
          assistance from the Task Magnate community to optimize your
          experience.{" "}
        </p></center>
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}

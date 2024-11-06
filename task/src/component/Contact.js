import React from "react";

export default function Contact() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#d9d9d9",
          paddingTop: "1%",
          paddingBottom: "1%",
        }}
      >
        <center>
          <h2 style={{ marginTop: "6%" }}>Contact Us</h2>
        </center>
        {/* Your content goes here */}
      </div>
      <div style={{ marginLeft: "10%", marginTop: "3%" }} className="row">
        <div className="col-md-4">
          <img
            className="img-fluid"
            src="tm1.jpg"
            alt="no"
            style={{ width: "15%", height: "15%" }}
          />
          <h2 style={{ marginTop: "3%" }}>Phone</h2>
          <h6 style={{ marginBottom: "-2%" }}> Call us at:</h6>
          <br />
          +91 8088423347 <br />
          0824 2988407
        </div>
        <div className="col-md-4">
          <img
            className="img-fluid"
            src="tm2.jpg"
            alt="no"
            style={{ width: "15%", height: "15%" }}
          />
          <h2 style={{ marginTop: "3%" }}>Email</h2>
          <h6 style={{ marginBottom: "-2%" }}> Email us at:</h6>
          <br />
          sales@rdltech.in
          <h6 style={{ marginBottom: "-2%" }}> Also Visit:</h6>
          <br />
          https://rdltech.in/
        </div>
        <div className="col-md-4" style={{}}>
          <img
            className="img-fluid"
            src="tm3.jpg"
            alt="no"
            style={{ width: "15%", height: "15%" }}
          />
          <h2 style={{ marginTop: "3%" }}>Address</h2>
          <h5> RDL Technologies Pvt Ltd</h5>
          5th floor ,Sahyadri Campus, Adyar, Mangaluru 575007, Karnataka.
        </div>
      </div>
    </>
  );
}

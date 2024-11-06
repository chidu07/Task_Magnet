const connection = require("../config/db");

const ta = (req, res) => {
  //console.log("data", req.body);
  const { tname, startdate, enddate } = req.body;

  console.log("data", req.body);

  const store = "INSERT INTO add_task(tname,startdate,enddate) VALUES(?, ?, ?)";
  const values = [tname, startdate, enddate];
  
  connection.query(store, values, (err, result) => {
    if (err) {
      //console.error("Error executing query:", err);
      console.log("Query result:", result);

      console.error("Error inserting data: ", err);
      res.status(500).json({ error: "Error inserting data" });
      return;
    } else {
      console.log("Query result:", result);
      console.log("Data inserted successfully");
      res.status(200).json({ message: "Data inserted successfully" });
    }
  });
};
module.exports = { ta };

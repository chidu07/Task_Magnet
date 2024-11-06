const connection = require("../config/db");

const temp = (req, res) => {
  console.log("data", req.body);
  const { email, password, role } = req.body;

  const store = "INSERT INTO user(email, password,role) VALUES (?, ?, ?)";

  connection.query(store, [email, password, role], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    } else {
      console.log("Query result:", result);
      return res
        .status(200)
        .json({ success: true, message: "Data inserted successfully" });
    }
  });
};
module.exports = { temp };

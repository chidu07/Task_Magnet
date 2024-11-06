// const connection = require("../config/db");

// const logg = (req, res) => {
//   const query = "SELECT * FROM user where email=? and password=?";

//   connection.query(query, [req.body.email, req.body.pass], (err, res) => {
//     if (err) {
//       return res
//         .status(500)
//         .json({ success: false, message: "Internal Server Error" });
//     }
//     if (res.length > 0) {
//       return res.json({ success: true });
//     } else {
//       return res.json({ success: false });
//     }
//   });
// };

// module.exports = { logg };

const connection = require("../config/db");

const logg = (req, res) => {
  const { email, pass, role } = req.body;
  if (role !== "admin" && role !== "user") {
    return res.status(400).json({ success: false, message: "Invalid role" });
  }
  const query = "SELECT * FROM user where email=? and password=? and role=? ";

  connection.query(query, [email, pass, role], (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }
    if (results.length > 0) {
      if (role === "admin") {
        return res.json({ success: true, message: "Admin login successful" });
      } else {
        return res.json({ success: true, message: "User login successful" });
      }
    } else {
      return res.json({
        success: false,
        message: "Invalid email, password, or role",
      });
    }
  });
};

module.exports = { logg };

// const connection = require("../config/db");

// const logg = (req, res) => {
//   const query = "SELECT * FROM user WHERE email=? AND password=?";
//   const { email, password } = req.body; // Destructuring email and password from req.body

//   // Sanitize inputs (optional but recommended)
//   // For example, you can use libraries like `validator` or implement your own sanitization function

//   connection.query(query, [email, password], (err, results) => {
//     if (err) {
//       return res
//         .status(500)
//         .json({ success: false, message: "Internal Server Error" });
//     }

//     if (results.length > 0) {
//       // If login is successful, return early after sending the response
//       return res.json({ Login: true, data: results });
//     } else {
//       // If login fails, return early after sending the response
//       return res.json({ Login: false });
//     }
//   });
// };

// module.exports = { logg };

// const connection = require("../config/db");

// const logg = (req, res) => {
//   const query = "SELECT * FROM user";

//   connection.query(query, (err, results) => {
//     if (err) {
//       return res
//         .status(500)
//         .json({ success: false, message: "Internal Server Error" });
//     }

//     res.status(200).json({ success: true, data: results });
//   });
// };
// module.exports = { logg };

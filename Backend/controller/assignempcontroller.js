const connection = require("../config/db");

const assemp = (req, res) => {
  const query = "SELECT * FROM emp";

  connection.query(query, (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }

    res.status(200).json({ success: true, data: results });
  });
};
module.exports = { assemp };

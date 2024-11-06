const connection = require("../config/db");

const eu = (req, res) => {
  const query = "SELECT * FROM updated_task";

  connection.query(query, (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    }

    res.status(200).json({ success: true, data: results });
  });
};
module.exports = { eu };

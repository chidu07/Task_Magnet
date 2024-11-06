const express = require("express");
const router = express.Router();
const { index } = require("../controller/taskController");
router.route("/").get(index);

module.exports = router;

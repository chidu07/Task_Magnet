const express = require("express");
const router = express.Router();
const { temp } = require("../controller/regcontroller");
router.route("/").post(temp);

module.exports = router;

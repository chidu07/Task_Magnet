const express = require("express");
const router = express.Router();
const { ta } = require("../controller/addtaskcontroller");
router.route("/").post(ta);

module.exports = router;

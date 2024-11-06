const express = require("express");
const router = express.Router();
const { asste } = require("../controller/assigntaskempcontroller");
router.route("/").post(asste);

module.exports = router;

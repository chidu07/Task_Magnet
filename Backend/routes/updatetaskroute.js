const express = require("express");
const router = express.Router();
const { ut } = require("../controller/updatetaskcontroller");
router.route("/").post(ut);

module.exports = router;

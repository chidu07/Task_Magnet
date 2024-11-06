const express = require("express");
const router = express.Router();
const { assemp } = require("../controller/assignempcontroller");
router.route("/").get(assemp);

module.exports = router;

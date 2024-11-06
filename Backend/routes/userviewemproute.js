const express = require("express");
const router = express.Router();
const { uvm } = require("../controller/userviewempcontroller");
router.route("/").get(uvm);

module.exports = router;

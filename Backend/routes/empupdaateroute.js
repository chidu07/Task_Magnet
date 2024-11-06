const express = require("express");
const router = express.Router();
const { eu } = require("../controller/empupdatecontroller");
router.route("/").get(eu);

module.exports = router;

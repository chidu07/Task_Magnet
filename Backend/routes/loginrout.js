const express = require("express");
const router = express.Router();
const { logg } = require("../controller/logincontroller");
router.route("/").post(logg);

module.exports = router;

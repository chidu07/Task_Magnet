const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const connection = require("./config/db");
const port = 8000;
app.use(cors());
app.use(bodyParser.json());

const temp = require("./routes/regrout");
app.use("/api/signup", temp);

const index = require("./routes/taskroute");
app.use("/api/index", index);

const logg = require("./routes/loginrout");
app.use("/api/logg", logg);

const ta = require("./routes/addtaskroute");
app.use("/api/addtask", ta);

const assemp = require("./routes/assignemproute");
app.use("/api/addemp", assemp);

const asste = require("./routes/assigntaskemproute");
app.use("/api/addtaskemp", asste);

const uvm = require("./routes/userviewemproute");
app.use("/api/uvm", uvm);

const ut = require("./routes/updatetaskroute");
app.use("/api/ut", ut);

const eu = require("./routes/empupdaateroute");
app.use("/api/eu", eu);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

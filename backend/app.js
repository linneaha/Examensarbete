const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser")
const connectDB = require("./config/db.js")
const PORT = 3001 || 6001;

connectDB();

const app = express();

app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

// middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// routes
const activityRouter = require("./routes/activityRoutes.js");
app.use("/api/activities", activityRouter);

import express from "express";
import mongoose from "mongoose";

const app = express();
app.use(express.json());

mongoose.set("strictQuery", false);
const PORT = 3001 || 6001;
mongoose
  .connect( "mongodb+srv://dummyUser:dummyPassword123@cluster0.5skhm3x.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

  var statisticsRouter = require("./routes/statistics");
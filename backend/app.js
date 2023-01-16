import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// databas
mongoose.set("strictQuery", false);
const PORT = 3001 || 6001;
mongoose
  .connect(
    "mongodb+srv://dummyUser:dummyPassword123@cluster0.5skhm3x.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));

// routes
import statisticsRouter from "./routes/statistics.js";
app.use("/", statisticsRouter);

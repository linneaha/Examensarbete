const mongoose = require("mongoose");

// database connection
const connectDB = async () => {
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://dummyUser:dummyPassword123@cluster0.5skhm3x.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .catch((error) => console.log(`${error} did not connect`));
}

module.exports = connectDB;
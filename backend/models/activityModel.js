const mongoose = require("mongoose");

const activitySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Activity", activitySchema);

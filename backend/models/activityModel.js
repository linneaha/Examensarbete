const mongoose = require("mongoose");

const activitySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  stats: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Stats",
    },
  ],
});

module.exports = mongoose.model("Activity", activitySchema);

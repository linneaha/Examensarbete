const mongoose = require("mongoose");

const statsSchema = mongoose.Schema({
  totalActiveTime: Number,
  totalBreakTime: Number,
  totalTime: Number,
  timeBeforeFirstBreak: Number,
  amountOfBreaks: Number,
  activityId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Activities",
  },
});

module.exports = mongoose.model("Stats", statsSchema);

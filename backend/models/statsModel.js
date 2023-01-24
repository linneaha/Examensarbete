const mongoose = require("mongoose");

const statsSchema = mongoose.Schema({
  totalActiveTime: Number,
  totalBreakTime: Number,
  timeBeforeFirstBreak: Number,
  amountOfBreaks: Number,
  activityId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Task",
  },
});

module.exports = mongoose.model("Stats", statsSchema);

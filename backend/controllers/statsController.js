const Stats = require("../models/statsModel");
const Activity = require("../models/activityModel");

const getStats = async (req, res) => {
  const stats = await Stats.find();
  res.status(200).json(stats);
};

const saveStats = async (req, res) => {
  const newStats = await new Stats(req.body);
  newStats.save();
  const activity = await Activity.findOne({ _id: newStats.activityId });
  if (activity) {
    activity.stats.push(newStats);
    activity.save();
    res.json(newStats);
  }
};

module.exports = { getStats, saveStats };


const Stats = require("../models/statsModel");

const getStats = async (req, res) => {
  const stats = await Stats.find();
  res.status(200).json(stats);
};

const saveStats = async (req, res) => {
  const stats = await Stats.create({
    totalActiveTime: req.body.totalActiveTime,
    totalBreakTime: req.body.totalBreakTime,
    timeBeforeFirstBreak: req.body.timeBeforeFirstBreak,
    amountOfBreaks: req.body.amountOfBreaks,
    activityId: req.body.activityId,
  });

  res.status(200).json(stats);
};

module.exports = { getStats, saveStats };

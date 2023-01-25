const Stats = require("../models/statsModel");
const Activity = require("../models/activityModel");

const getStats = async (req, res) => {
  const stats = await Stats.find();
  res.status(200).json(stats);
};

const saveStats = (req, res) => {
  const newStats = new Stats(req.body);
  newStats.save()
    .then((result) => {
      Activity.findOne({ _id: newStats.activityId }, (err, activity) => {
          if (activity) {
              activity.stats.push(newStats);
              activity.save();
              res.json(newStats);
          }
      });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
};

module.exports = { getStats, saveStats };

// const saveStats = async (req, res) => {
//   const stats = await Stats.create(req.body);
//   Activity.findByIdAndUpdate(stats.activityId).push(stats._id)
//   res.status(200).json(stats);
// };

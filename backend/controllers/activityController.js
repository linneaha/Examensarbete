const Activity = require("../models/activityModel");

const getActivities = async (req, res) => {
  const activity = await Activity.find().populate("stats");
  res.status(200).json(activity);
};

const createActivity = async (req, res) => {
  const activity = await Activity.create({
    name: req.body.name,
    icon: req.body.icon
  });

  res.status(200).json(activity);
};

const updateActivity = async (req, res) => {
  const updatedActivity = await Activity.findByIdAndUpdate(
    req.params.id,
    req.body
  );

  res.status(200).json(updatedActivity);
};

const deleteActivity = async (req, res) => {
  const activity = await Activity.findById(req.params.id);
  await activity.remove();
  res.status(200).json({ id: req.params.id });
};

module.exports = {
  getActivities,
  createActivity,
  updateActivity,
  deleteActivity,
};
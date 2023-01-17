const Task = require("../models/taskModel");

const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  const task = await Task.create({
    name: req.body.name
  })

  res.status(200).json(task)
};

module.exports = { getTasks, createTask };

const Task = require("../models/activityModel");

const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.status(200).json(tasks);
};

const createTask = async (req, res) => {
  const task = await Task.create({
    name: req.body.name,
  });

  res.status(200).json(task);
};

const updateTask = async (req, res) => {
  // const task = await Task.findById(req.params.id);

  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body);

  res.status(200).json(updatedTask);
};

const deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  await task.remove();
  res.status(200).json({ id: req.params.id });
};
// const deleteTask = async (req, res) => {
//   try {
//     const { id: id } = req.params;
//     console.log(id);
//     if (!mongoose.Types.ObjectId.isValid(id))
//       return res.status(404).json({ msg: `No task with id :${id}` });
//     const task = await Task.findOneAndDelete({ _id: id });
//     res.status(200).json(task);
//   } catch (error) {
//     console.log(error);
//   }
// };

module.exports = { getTasks, createTask, deleteTask, updateTask };

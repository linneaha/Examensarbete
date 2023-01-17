const express = require("express");
const router = express.Router();
const { getTasks, createTask, deleteTask, updateTask } = require("../controllers/taskController");

router.get("/", getTasks);
router.post("/", createTask);
router.put("/:id", updateTask);
router.delete("/:id", deleteTask);

module.exports = router;

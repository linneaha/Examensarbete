const express = require("express");
const router = express.Router();

const {
  getActivities,
  createActivity,
  deleteActivity,
  updateActivity,
} = require("../controllers/activityController");

router.get("/", getActivities);
router.get("/:id", getActivities);
router.post("/", createActivity);
router.put("/:id", updateActivity);
router.delete("/:id", deleteActivity);

module.exports = router;

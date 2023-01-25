const express = require("express");
const router = express.Router();
const { getActivities, createActivity, deleteActivity, updateActivity,getAllStats, saveStats } = require("../controllers/activityController");

router.get("/", getActivities);
router.get("/:id", getActivities);
router.post("/", createActivity);
router.put("/:id", updateActivity);
router.delete("/:id", deleteActivity);
router.get("/:id/stats", getAllStats)

module.exports = router;

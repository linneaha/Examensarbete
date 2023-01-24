const express = require("express");
const router = express.Router();
const { getStats, saveStats } = require("../controllers/statsController");

router.get("/", getStats);
router.post("/", saveStats);

module.exports = router;

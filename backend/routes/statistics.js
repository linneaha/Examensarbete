import express from "express";
const router = express.Router();

// router.get("/", async function (req, res) {
    
// })

router.get("/", (req, res) => res.status(200).json({message:"worked"}));

export default router;
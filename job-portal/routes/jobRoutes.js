import express from "express";
import {
    createJobController,
    deleteJobController,
    getAllJobsController,
    jobStatsController,
    updateJobController,
} from "../controllers/jobsController.js";
import userAuth from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/create-job", userAuth, createJobController);
router.get("/get-job", userAuth, getAllJobsController);
router.patch("/update-job/:id", userAuth, updateJobController);
router.delete("/delete-job/:id", userAuth, deleteJobController);
router.get("/job-stats", userAuth, jobStatsController);

export default router;
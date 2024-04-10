import express from "express";
import { updateUserController } from "../controllers/userController.js";
import userAuth from "../middlewares/authMiddleware.js";

const router = express.Router();

router.put("/update-user", userAuth, updateUserController);

export default router;
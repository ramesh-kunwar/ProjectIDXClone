import express from "express";
import { createProjectController } from "../../controllers/projectControllr.js";

const router = express.Router();

router.post("/", createProjectController);

export default router;
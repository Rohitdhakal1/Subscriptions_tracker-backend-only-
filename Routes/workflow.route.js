import { Router } from "express";
import { sendReminders } from "../cantrollers/workflow.controller.js";

const router = Router();

router.post("/subscription/reminder", sendReminders);

export default router;

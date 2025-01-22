import { Router } from "express";
import { mailPost } from "../controller/mail.controller.js";

const router = Router();

router.post("/send-email", mailPost);

export default router;

import { Router } from "express";
import {
  authLogin,
  authLogout,
  authSignup,
} from "../controller/auth.controller.js";

const router = Router();

router.get("/login", authLogin);
router.get("/signup", authSignup);
router.get("/logout", authLogout);

export default router;

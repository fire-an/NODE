import express from "express";
import { signin, signup } from "../controllers/auth";
const router = express.Router();

router.post("/auth/signin", signin);
router.post("/auth/signup", signup);

export default router;

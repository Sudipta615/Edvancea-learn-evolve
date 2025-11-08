import express from "express";
import { signupUser, loginUser, getMe } from "../controllers/auth.controller"; // Import getMe
import { protect } from "../middleware/auth.middleware"; // Import protect

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/me", protect, getMe); // Add this protected route

export default router;
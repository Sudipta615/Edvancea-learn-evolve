import express from "express";
import { protect } from "../middleware/auth.middleware";
import {
  getProgress,
  markComplete,
  markIncomplete,
  getBookmarks,
  toggleBookmark,
  getQuizProgress,
  recordQuizCompletion,
  getStreak,
  updateStreak
} from "../controllers/userData.controller";

const router = express.Router();

// All these routes are protected and require a valid token
router.use(protect);

// Progress
router.get("/progress", getProgress);
router.post("/progress/complete", markComplete);
router.post("/progress/incomplete", markIncomplete);

// Bookmarks
router.get("/bookmarks", getBookmarks);
router.post("/bookmarks/toggle", toggleBookmark);

// Quizzes
router.get("/quizzes", getQuizProgress);
router.post("/quizzes/complete", recordQuizCompletion);

// Streak
router.get("/streak", getStreak);
router.post("/streak/update", updateStreak);

export default router;
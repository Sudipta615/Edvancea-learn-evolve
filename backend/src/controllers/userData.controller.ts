import { Request, Response } from "express";
import UserData from "../models/UserData.model";
import { isToday, isYesterday } from "date-fns"; // Removed parseISO as we'll work with Date objects

// Helper to get or create user data
const getUserData = async (userId: string) => {
  let data = await UserData.findOne({ user: userId });
  if (!data) {
    data = await UserData.create({ user: userId });
  }
  return data;
};

// --- Progress ---
export const getProgress = async (req: Request, res: Response) => {
  try {
    const data = await getUserData(req.user.id);
    res.json(Object.fromEntries(data.progress));
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const markComplete = async (req: Request, res: Response) => {
  const { topicId } = req.body;
  try {
    const data = await getUserData(req.user.id);
    data.progress.set(topicId, true);
    await data.save();
    res.json(Object.fromEntries(data.progress));
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const markIncomplete = async (req: Request, res: Response) => {
  const { topicId } = req.body;
  try {
    const data = await getUserData(req.user.id);
    data.progress.delete(topicId);
    await data.save();
    res.json(Object.fromEntries(data.progress));
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// --- Bookmarks ---
export const getBookmarks = async (req: Request, res: Response) => {
  try {
    const data = await getUserData(req.user.id);
    res.json(Object.fromEntries(data.bookmarks));
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const toggleBookmark = async (req: Request, res: Response) => {
  const { topicId } = req.body;
  try {
    const data = await getUserData(req.user.id);
    if (data.bookmarks.has(topicId)) {
      data.bookmarks.delete(topicId);
    } else {
      data.bookmarks.set(topicId, true);
    }
    await data.save();
    res.json(Object.fromEntries(data.bookmarks));
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// --- Quiz Progress ---
export const getQuizProgress = async (req: Request, res: Response) => {
  try {
    const data = await getUserData(req.user.id);
    res.json(Object.fromEntries(data.quizProgress));
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const recordQuizCompletion = async (req: Request, res: Response) => {
  const { topicId, score } = req.body;
  try {
    const data = await getUserData(req.user.id);
    const existing = data.quizProgress.get(topicId);
    
    data.quizProgress.set(topicId, {
      completed: true,
      score: Math.max(score, existing?.score || 0), // Keep best score
      attempts: (existing?.attempts || 0) + 1,
      lastAttempt: new Date(),
    });
    
    await data.save();
    res.json(Object.fromEntries(data.quizProgress));
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// --- Streak ---
export const getStreak = async (req: Request, res: Response) => {
    try {
      const data = await getUserData(req.user.id);
      
      // Check if streak is broken on load
      const lastDate = data.streak.lastCompletedDate;
      if (lastDate && !isToday(lastDate) && !isYesterday(lastDate) && data.streak.count > 0) {
        data.streak.count = 0;
        data.streak.lastCompletedDate = null;
        await data.save();
      }
      
      res.json(data.streak);
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
};

export const updateStreak = async (req: Request, res: Response) => {
    try {
        const data = await getUserData(req.user.id);
        const today = new Date();
        const lastDate = data.streak.lastCompletedDate;

        if (!lastDate) {
            // First time
            data.streak.count = 1;
            data.streak.lastCompletedDate = today;
        } else if (isToday(lastDate)) {
            // Already completed today, do nothing
        } else if (isYesterday(lastDate)) {
            // Increment streak
            data.streak.count += 1;
            data.streak.lastCompletedDate = today;
        } else {
            // Broken streak, reset
            data.streak.count = 1;
            data.streak.lastCompletedDate = today;
        }
        
        await data.save();
        res.json(data.streak);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
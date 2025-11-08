import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/User.model";
import UserData from "../models/UserData.model";

const generateToken = (id: string) => {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined");
  }
  return jwt.sign({ id }, jwtSecret, {
    expiresIn: "30d",
  });
};

export const signupUser = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    // Create user
    const user = await User.create({
      username,
      email,
      password,
    });

    // Create corresponding user data entry
    await UserData.create({
      user: user._id, // This is correct, we are passing the ObjectId to the ref
      progress: {},
      bookmarks: {},
      quizProgress: {},
      streak: { count: 0, lastCompletedDate: null },
    });

    if (user) {
      res.status(201).json({
        _id: user.id, // FIX: Was user._id
        username: user.username,
        email: user.email,
        token: generateToken(user.id), // FIX: Was user._id.toString()
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.comparePassword(password))) {
      res.json({
        _id: user.id, // FIX: Was user._id
        username: user.username,
        email: user.email,
        token: generateToken(user.id), // FIX: Was user._id.toString()
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// This function will now work thanks to the tsconfig.json fix
export const getMe = (req: Request, res: Response) => {
  // The 'protect' middleware already found the user and attached it to req.user
  // We just send it back.
  res.json(req.user);
};
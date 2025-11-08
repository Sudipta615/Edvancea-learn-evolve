import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/User.model";

export const protect = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token;
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error("JWT_SECRET is not defined");
  }

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, jwtSecret) as { id: string };

      // Add user to the request object
      const user = await User.findById(decoded.id).select("-password");
      if (!user) {
        return res.status(401).json({ message: "Not authorized, user not found" });
      }
      req.user = user;
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: "Not authorized, token failed" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "Not authorized, no token" });
  }
};
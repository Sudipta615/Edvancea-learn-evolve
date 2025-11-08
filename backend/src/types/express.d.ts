import { IUser } from "../models/User.model";

declare global {
  namespace Express {
    export interface Request {
      user: IUser; // Add the 'user' property to the Request interface
    }
  }
}
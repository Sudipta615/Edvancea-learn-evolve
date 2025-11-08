import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUserData extends Document {
  user: mongoose.Types.ObjectId; // Link to the User model
  progress: Map<string, boolean>;
  bookmarks: Map<string, boolean>;
  quizProgress: Map<string, {
    completed: boolean;
    score: number;
    attempts: number;
    lastAttempt?: Date;
  }>;
  streak: {
    count: number;
    lastCompletedDate: Date | null;
  };
}

const UserDataSchema: Schema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
    unique: true,
  },
  progress: {
    type: Map,
    of: Boolean,
    default: {},
  },
  bookmarks: {
    type: Map,
    of: Boolean,
    default: {},
  },
  quizProgress: {
    type: Map,
    of: new Schema({
      completed: Boolean,
      score: Number,
      attempts: Number,
      lastAttempt: Date,
    }),
    default: {},
  },
  streak: {
    count: { type: Number, default: 0 },
    lastCompletedDate: { type: Date, default: null },
  },
});

const UserData: Model<IUserData> = mongoose.model<IUserData>(
  "UserData",
  UserDataSchema
);
export default UserData;
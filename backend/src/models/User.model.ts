import mongoose, { Schema, Document, Model } from "mongoose";
import bcrypt from "bcryptjs";

// Interface for User properties
export interface IUser extends Document {
  username: string;
  email: string;
  password?: string; // Password is optional when fetching user, but required for creation
  // Method to compare passwords
  comparePassword(enteredPassword: string): Promise<boolean>;
}

const UserSchema: Schema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Hash password before saving
UserSchema.pre<IUser>("save", async function (next) {
  if (!this.isModified("password") || !this.password) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Method to compare entered password with hashed password
UserSchema.methods.comparePassword = async function (
  enteredPassword: string
): Promise<boolean> {
  if (!this.password) return false;
  return await bcrypt.compare(enteredPassword, this.password);
};

const User: Model<IUser> = mongoose.model<IUser>("User", UserSchema);
export default User;
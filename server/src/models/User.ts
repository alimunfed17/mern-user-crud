import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  phone: string;
  address?: string;
  gender: "male" | "female" | "other";
  status: "active" | "inactive";
  resume: string;
}

const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    address: { type: String },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    status: { type: String, enum: ["active", "inactive"], required: true },
    resume: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", userSchema);

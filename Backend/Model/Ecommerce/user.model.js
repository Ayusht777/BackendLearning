import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timeStamps: true }
);

export const User = mongoose.model("User", userSchema);

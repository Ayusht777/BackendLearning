import mongoose from "mongoose";

const patientSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    diagnosedWith: {
      type: String,
      require: true,
    },
    diagnosedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
    },
    address: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      require: true,
    },
    bloodGroup: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "TRANSGENDER"],
      require: true,
    },
    admittedIn: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hospital",
    },
    
  },
  { timestamps: true }
);

export const Patient = mongoose.model("Patient", patientSchema);

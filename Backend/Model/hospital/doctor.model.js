import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    salary: {
      type: Number,
      require: true,
    },
    qualification: {
      type: String,
      require: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },
    worksInHospitals: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
      },
    ],
    address: {
      type: String,
      require: true,
    },
    age: {
      type: Number,
      require: true,
    },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "TRANSGENDER"],
      require: true,
    },
    fees: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Doctor = mongoose.model("Doctor", doctorSchema);

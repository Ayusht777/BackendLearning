import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    city: {
      type: String,
      require: true,
    },
    pincode: {
      type: String,
      require: true,
    },
    state: {
      type: String,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
    specializedIn: [{ type: String, require: true }],
    doctors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor",
      },
    ],
    category: {
      type: String,
      enums: ["PRIVATE", "GOVERNMENT", "SEMI-GOVERNMENT"],
    },
  },
  { timestamps: true }
);

export const Hospital = mongoose.model("Hospital", hospitalSchema);

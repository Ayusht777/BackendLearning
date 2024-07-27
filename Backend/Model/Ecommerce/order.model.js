import mongoose from "mongoose";
const orderItemSchema = new mongoose.Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      require: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    orderItems: {
      type: [orderItemSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: mongoose.Schema.Types.ObjectId,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      default: "PENDING",
    },
  },

  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
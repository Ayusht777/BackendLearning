import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    productImage: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      require: true,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    
  },
  { timestamps: true }
);

export const Product = mongoose.Model("Product", productSchema);

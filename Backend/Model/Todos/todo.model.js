import mongoose from "mongoose";

const todo = new mongoose.Schema({
  content: {
    type: String,
    require: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  subTodos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubTodo",
    },
  ],
});

export const Todo = mongoose.model("Todo", todos);

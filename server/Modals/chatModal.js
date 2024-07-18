import mongoose from "mongoose";
const Schema = mongoose.Schema;

const chatSchema = new Schema(
  {
    members: Array,
  },
  { timestamps: true }
);

const chatModal = mongoose.model("chat", chatSchema);
export default chatModal;

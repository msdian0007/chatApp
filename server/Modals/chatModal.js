import mongoose from "mongoose";
const Schema = mongoose.Schema;

const chatSchema = new Schema(
  {
    members: Array,
    unreadCounts: [
      {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
        count: { type: Number, default: 0 }
      },
    ],
  },
  { timestamps: true }
);

const chatModal = mongoose.model("chat", chatSchema);
export default chatModal;

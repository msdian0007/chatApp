import mongoose from "mongoose";
const Schema = mongoose.Schema;

const friendRequestSchema = new Schema(
  {
    sender: { type: Schema.Types.ObjectId, ref: "users", required: true },
    receiver: { type: Schema.Types.ObjectId, ref: "users", required: true },
    status: {
      type: String,
      enum: ["pending", "accepted", "rejected"],
      default: "pending",
    },
    sentAt: { type: Date, default: Date.now },
    respondedAt: { type: Date },
  }
);

const friendRequestModal = mongoose.model("FriendRequest", friendRequestSchema);
export default friendRequestModal;

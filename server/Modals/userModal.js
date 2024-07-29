import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String },
    phoneNumber: { type: Number, required: true, unique: true },
    password: { type: String, required: true },
    friends: [{ type: Schema.Types.ObjectId, ref: "users" }],
    friendRequests: [{ type: Schema.Types.ObjectId, ref: "friendrequest" }],
  },
  {
    timestamps: true,
  }
);

const userModal = mongoose.model("User", userSchema);
export default userModal;

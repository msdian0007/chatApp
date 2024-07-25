import mongoose from "mongoose";
import chatModal from "../Modals/chatModal.js";
import friendRequestModal from "../Modals/friendRequestModal.js";
import userModal from "../Modals/userModal.js";

export const createChat = async (req, res) => {
  try {
    const { firstId, secondId } = req.body;
    const chat = await chatModal.findOne({
      members: { $all: [firstId, secondId] },
    });
    if (chat) return res.status(200).json(chat);

    const newChat = new chatModal({
      members: [firstId, secondId],
    });
    const response = await newChat.save();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const findChats = async (req, res) => {
  try {
    const { userId } = req.params;
    const chats = await chatModal.find({
      members: { $in: [userId] },
    });
    res.status(200).json(chats);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const findChat = async (req, res) => {
  try {
    const { firstId, secondId } = req.params;
    const chat = await chatModal.findOne({
      members: { $all: [firstId, secondId] },
    });
    res.status(200).json(chat);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const sendFriendRequest = async (senderId, receiverId) => {
  try {
    // Check if the request already exists
    const existingRequest = await friendRequestModal.findOne({
      sender: senderId,
      receiver: receiverId,
    });
    if (existingRequest) {
      throw new Error("Friend request already sent");
    }

    // Create a new friend request
    const friendRequest = new friendRequestModal({
      sender: senderId,
      receiver: receiverId,
    });

    await friendRequest.save();

    // Update users' friendRequests arrays
    await userModal.findByIdAndUpdate(senderId, {
      $push: { friendRequests: friendRequest._id },
    });
    await userModal.findByIdAndUpdate(receiverId, {
      $push: { friendRequests: friendRequest._id },
    });

    return friendRequest;
  } catch (error) {
    throw error;
  }
};

export const sendChatRequest = async (req, res) => {
  const { senderId, recipientId } = req.body;
  try {
    const friendRequest = await sendFriendRequest(senderId, recipientId);
    res.status(200).json(true);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getChatRequest = async (req, res) => {
  const { chatRequestId } = req.params;
  try {
    const chatRequest = await friendRequestModal.aggregate([
      {
        $match: {
          _id: new mongoose.Types.ObjectId(chatRequestId),
        },
      },
      {
        $lookup: {
          from: "users",
          // let: { sender: "$sender" },
          // pipeline: [
          //   { $match: { $expr: { $eq: ["$_id", "$$sender"] } } }
          // ],
          localField: "sender",
          foreignField: "_id",
          as: "sender_details",
        },
      },
      {
        $unwind: "$sender_details",
      },
      {
        $lookup: {
          from: "users",
          // let: { sender: "$sender" },
          // pipeline: [
          //   { $match: { $expr: { $eq: ["$_id", "$$sender"] } } }
          // ],
          localField: "receiver",
          foreignField: "_id",
          as: "receiver_details",
        },
      },
      {
        $unwind: "$receiver_details",
      },
      {
        $project: {
          _id: 1,
          sender: 1,
          receiver: 1,
          status: 1,
          sentAt: 1,
          respondedAt: 1,
          sender_details: {
            firstName: "$sender_details.firstName",
            lastName: "$sender_details.lastName",
            phoneNumber: "$sender_details.phoneNumber",
          },
          receiver_details: {
            firstName: "$receiver_details.firstName",
            lastName: "$receiver_details.lastName",
            phoneNumber: "$receiver_details.phoneNumber",
          },
        },
      },
    ]);
    res.status(200).json(chatRequest);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

const respondToFriendRequest = async (requestId, recipientId, respond) => {
  try {
    const friendRequest = await friendRequestModal.findById(requestId);

    if (!friendRequest) {
      throw new Error("Friend request not found");
    }

    if (friendRequest.receiver.toString() !== recipientId) {
      throw new Error("Not authorized to respond to this friend request");
    }

    if (respond === "accept") {
      friendRequest.status = "accepted";
      await userModal.findByIdAndUpdate(friendRequest.sender, {
        $push: { friends: friendRequest.receiver },
      });
      await userModal.findByIdAndUpdate(friendRequest.receiver, {
        $push: { friends: friendRequest.sender },
      });
    } else if (respond === "reject") {
      friendRequest.status = "rejected";
    } else {
      throw new Error("Invalid response");
    }

    friendRequest.respondedAt = new Date();
    await friendRequest.save();

    return friendRequest;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const chatRequestResponse = async (req, res) => {
  const { chatReqId, recipientId, respond } = req.body;
  try {
    const friendRequest = await respondToFriendRequest(
      chatReqId,
      recipientId,
      respond
    );
    res.status(200).json(friendRequest);
  } catch (error) {
    res.status(400).json(error);
  }
};

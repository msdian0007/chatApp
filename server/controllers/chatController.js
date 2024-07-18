import chatModal from "../Modals/chatModal.js";

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

import messageModal from "../Modals/messageModal.js";

export const createMessage = async (req, res) => {
  try {
    const { chatId, senderId, text } = req.body;

    const newMessage = new messageModal({
      chatId,
      senderId,
      text,
    });
    const response = await newMessage.save();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const getMessages = async (req, res) => {
  try {
    const { chatId } = req.params;

    const messages = await messageModal.find({
      chatId,
    });
    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const getLatestMessage = async (req, res) => {
  try {
    const { chatId } = req.params;

    const messages = await messageModal.findOne({chatId}, {}, { sort: { 'createdAt' : -1 } })
    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

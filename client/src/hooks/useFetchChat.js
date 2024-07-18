import { useState } from "react";
import axiosInstance from "../api/axios";

export const useFetchChat = () => {
  const [lastMessageLoading, setLastMessageLoading] = useState(true);
  const [lastMessage, setLastMessage] = useState();

  return {
    lastMessageLoading,
    lastMessage,
    getLatestMessage: async (chatId) => {
      // const recipientId = chat?.members.find((id) => id !== user?._id);
      // if (!recipientId) return null;
      const response = await axiosInstance.get(`/messages/latest/${chatId}`);
      if (response.data) {
        setLastMessage(response.data);
        setLastMessageLoading(false);
      }
    },
  };
};

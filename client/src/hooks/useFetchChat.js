import { useState } from "react";
import axiosInstance from "../api/axios";
import { message } from "antd";
import { handleError } from "../utils/handleError";

export const useFetchChat = () => {
  const [chatReqLoading, setChatReqLoading] = useState(false);
  const [lastMessageLoading, setLastMessageLoading] = useState(true);
  const [lastMessage, setLastMessage] = useState();
  return {
    lastMessageLoading,
    lastMessage,
    chatReqLoading,
    getLatestMessage: async (chatId) => {
      try {
        const response = await axiosInstance.get(`/messages/latest/${chatId}`);
        if (response.data) {
          setLastMessage(response.data);
          setLastMessageLoading(false);
        }
      } catch (error) {
        handleError(error);
      }
    },
    sendChatRequest: async (senderId, recipientId) => {
      try {
        setChatReqLoading(true);
        const response = await axiosInstance.post(`/chats/sendChatRequest`, {
          senderId,
          recipientId,
        });
        if (response.data) {
          message.success("Request send successfully");
          setChatReqLoading(false);
          return response.data;
        }
      } catch (error) {
        setChatReqLoading(false)
        handleError(error);
      }
    },
    respondChatRequest: async (senderId, recipientId, respond) => {
      try {
        const response = await axiosInstance.post(
          `/chats/chatRequestResponse`,
          {
            senderId,
            recipientId,
            respond,
          }
        );
        if (response.data) {
        }
      } catch (error) {
        handleError(error);
      }
    },
  };
};

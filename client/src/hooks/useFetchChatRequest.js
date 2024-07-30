import { useState } from "react";
import axiosInstance from "../api/axios";
import { handleError } from "../utils/handleError";

export const useFetchChatRequest = () => {
  const [chatRequest, setChatRequest] = useState();
  const [loadingChatRespond, setLoadingChatRespond] = useState(false);
  return {
    chatRequest,
    loadingChatRespond,
    sendChatRequest: async (senderId, recipientId) => {
      try {
        const response = await axiosInstance.post(`/chats/sendChatRequest`, {
          senderId,
          recipientId,
        });
        if (response.data) {
          //   setChatRequest([]);
          return true;
        }
      } catch (error) {
        console.log(error);
        handleError(error);
      }
    },
    getChatRequestById: async (chatRequestId) => {
      try {
        const response = await axiosInstance.get(
          `/chats/getChatRequest/${chatRequestId}`
        );
        if (response.data) {
          setChatRequest(response.data[0]);
          return true;
        }
      } catch (error) {
        console.log(error);
      }
    },
    respondChatRequest: async (chatReqId, recipientId, respond) => {
      try {
        setLoadingChatRespond(true);
        const response = await axiosInstance.post(
          `/chats/chatRequestResponse`,
          {
            chatReqId,
            recipientId,
            respond,
          }
        );
        if (response.data) {
          setLoadingChatRespond(false);
        }
      } catch (error) {
        setLoadingChatRespond(false);
        console.log(error);
      }
    },
  };
};

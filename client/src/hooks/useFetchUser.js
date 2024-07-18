import { useState } from "react";
import axiosInstance from "../api/axios";

export const useFetchUser = () => {
  const [recipient, setRecipient] = useState();
  const [recipientLoading, setRecipientLoading] = useState(true);

  return {
    recipientLoading,
    recipient,
    getRecipient: async (chat, user) => {
      const recipientId = chat?.members.find((id) => id !== user?._id);
      if (!recipientId) return null;
      const response = await axiosInstance.get(`/user/find/${recipientId}`);
      if (response.data) {
        setRecipient(response.data);
        setRecipientLoading(false);
      }
    },
  };
};

import { useState } from "react";
import axiosInstance from "../api/axios";

export const useFetchUser = () => {
  const [recipient, setRecipient] = useState();
  const [recipientLoading, setRecipientLoading] = useState(false);
  const [searchedUsers, setSearchedUsers] = useState([]);
  const [searchedUsersLoading, setSearchedUsersLoading] = useState(false);
  const [recipients, setRecipients] = useState();
  const [recipientsLoading, setRecipientsLoading] = useState(false);

  return {
    recipientLoading,
    recipient,
    searchedUsersLoading,
    searchedUsers,
    recipients,
    recipientsLoading,
    setSearchedUsers,
    getRecipient: async (recipientId) => {
      try {
        setRecipientLoading(true);
        const response = await axiosInstance.get(`/user/find/${recipientId}`);
        if (response.data) {
          setRecipient(response.data);
          setRecipientLoading(false);
        }
      } catch (error) {
        setRecipientLoading(false);
      }
    },
    getRecipients: async (recipientId) => {
      try {
        setRecipientsLoading(true);
        const response = await axiosInstance.post(`/user/getUsersById`, {
          recipientId,
        });
        if (response.data) {
          setRecipients(response.data);
          setRecipientsLoading(false);
        }
      } catch (error) {
        setRecipientsLoading(false);
      }
    },
    searchUsersByPhoneNumber: async (phoneNumber) => {
      try {
        setSearchedUsersLoading(true);
        const response = await axiosInstance.get(
          `/user/findByNumber/${phoneNumber}`
        );
        if (response.data) {
          setSearchedUsers(response.data);
          setSearchedUsersLoading(false);
        }
      } catch (error) {
        setSearchedUsersLoading(false);
      }
    },
  };
};

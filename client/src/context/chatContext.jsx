import axiosInstance from "../api/axios";
import { io } from "socket.io-client";

import {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { baseURL } from "../constants";
import { handleError } from "../utils/handleError";
import { playNotifications } from "../utils/NotificationsHelper";
import { useHelper } from "../hooks/useHelper";

const ChatContext = createContext(null);

const ChatProvider = ({ children, user }) => {
  // CUSTOMIZED HOOKS
  const { getLatestChatOnTopByChatId, getLatestChatOnTop } = useHelper();

  // STATES
  const [chatLoading, setChatLoading] = useState(false);
  const [selectedChat, SetSelectedChat] = useState(null);
  const [userChat, setUserChat] = useState([]);
  const [chatList, setChatList] = useState([]);
  const [potentialChatsLoading, setPotentialChatsLoading] = useState(false);
  const [potentialChats, setPotentialChats] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messagesLoading, setMessagesLoading] = useState(false);
  const [messages, setMessages] = useState(null);
  const [newMessage, setNewMessage] = useState(null);
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [isNewFriendAdded, setIsNewFriendAdded] = useState(false);

  // CREATE NEW CHAT
  const createChat = useCallback(async (firstId, secondId) => {
    try {
      SetSelectedChat(secondId);
      const response = await axiosInstance.post("/chats", {
        firstId,
        secondId,
      });
      if (response.data) {
        setUserChat((prev) => [response.data, ...prev]);
        SetSelectedChat(null);
      }
    } catch (error) {
      SetSelectedChat(null);
      handleError(error);
    }
  }, []);

  const sendTextMessage = useCallback(
    async (text, senderId, recipientId, chatId, setTextMessage) => {
      try {
        if (!text) return;
        let oldMessages = messages;
        oldMessages = [
          ...oldMessages,
          { text, createdAt: new Date(), senderId },
        ];
        setMessages(oldMessages);
        playNotifications("SEND");
        setTextMessage("");
        const response = await axiosInstance.post("/messages/sendMessage", {
          chatId,
          senderId,
          text,
        });
        if (response.data) {
          setNewMessage(response.data);
          oldMessages.pop();
          setMessages(() => [...oldMessages, response.data]);

          // SORT CHAT-LIST
          const result = getLatestChatOnTopByChatId(chatList, chatId);
          if (result) setChatList(result);
        }
      } catch (error) {
        handleError(error);
      }
    },
    [messages, chatList]
  );
  const updateCurrentChat = useCallback(
    (chat, senderId) => {
      setCurrentChat(chat);
      const updatedNotifications = notifications.map((n) =>
        n.senderId === senderId ? { ...n, isRead: true } : n
      );
      setNotifications(updatedNotifications);
    },
    [notifications]
  );

  const openNewChat = useCallback(
    async (firstId, secondId) => {
      try {
        const response = await axiosInstance.get(
          `/chats/${firstId}/${secondId}`
        );
        if (response.data) {
          setCurrentChat(response.data);
          const updatedNotifications = notifications.map((n) =>
            n.senderId === firstId ? { ...n, isRead: true } : n
          );
          setNotifications(updatedNotifications);
        }
      } catch (error) {
        handleError(error);
      }
    },
    [notifications]
  );

  const markAllAsRead = useCallback((modNot) => {
    const updatedNotifications = modNot.map((n) => ({ ...n, isRead: true }));
    setNotifications(updatedNotifications);
  }, []);

  useEffect(() => {
    if (!user) return;
    const getUserChat = async () => {
      try {
        setChatLoading(true);
        const response = await axiosInstance.get(`/chats/${user?._id}`);
        if (response.data) {
          const newUserChats = getLatestChatOnTop(response.data);
          setUserChat(newUserChats);
          setChatLoading(false);
        }
      } catch (error) {
        handleError(error);
      }
    };
    getUserChat();
  }, [user]);

  useEffect(() => {
    setChatList(userChat);
  }, [userChat]);

  useEffect(() => {
    if (!user) return;
    const getUsers = async () => {
      try {
        setPotentialChatsLoading(true);
        const response = await axiosInstance.get(
          `/user/getAllFriends/${user._id}`
        );
        if (response.data) {
          const pChats = response.data.filter((u) => {
            let isChatCreated = false;
            if (user._id === u._id) return false;
            if (userChat) {
              isChatCreated = userChat?.some((c) => {
                return c.members[0] === u._id || c.members[1] === u._id;
              });
            }
            return !isChatCreated;
          });
          setAllUsers(response.data);
          setPotentialChats(pChats);
          setPotentialChatsLoading(false);
        }
      } catch (error) {
        setPotentialChatsLoading(false);
        handleError(error);
      }
    };
    getUsers();
  }, [userChat, isNewFriendAdded]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        setMessagesLoading(true);
        const response = await axiosInstance.get(
          `/messages/${currentChat?._id}`
        );
        if (response.data) {
          setMessages(response.data);
          setMessagesLoading(false);
        }
      } catch (error) {
        handleError(error);
      }
    };
    const markMessagesAsRead = async () => {
      try {
        await axiosInstance.post(`/chats/markMessagesAsRead`, {
          chatId: currentChat?._id,
          userId: user?._id,
        });
      } catch (error) {
        handleError(error);
      }
    };
    if (!currentChat) return;
    getMessages();
    markMessagesAsRead();
  }, [currentChat]);

  // SOCKET-IO INITIALIZATION
  useEffect(() => {
    const newSocket = io(baseURL.socket);
    setSocket(newSocket);
    return () => {
      newSocket.disconnect();
    };
  }, [user]);

  // MANAGE ONLINE USERS
  useEffect(() => {
    if (socket === null && !user) return;
    socket.emit("addOnlineUser", user?._id);
  }, [socket]);
  useEffect(() => {
    if (socket === null && !user) return;
    socket.on("getOnlineUsers", (users) => {
      setOnlineUsers(users);
    });

    return () => {
      socket.off("getOnlineUsers");
    };
  }, [socket]);

  // SEND NEW MESSAGES
  useEffect(() => {
    if (socket === null && !user) return;
    socket.emit("sendNewMessage", {
      recipientId: currentChat?.members.find((id) => id !== user?._id),
      textMessage: newMessage,
    });
  }, [newMessage]);

  // GET NEW MESSAGES
  useEffect(() => {
    if (socket === null && !user) return;
    socket.on("getNewMessage", (message) => {
      if (currentChat?._id === message.chatId) {
        setMessages((prev) => [...prev, message]);
      }
      const result = getLatestChatOnTopByChatId(chatList, message.chatId);
      if (result) setChatList(result);
    });
    socket.on("sendNotification", (info) => {
      if (currentChat?.members.find((id) => id === info.senderId)) {
        setNotifications((prev) => [{ ...info, isRead: true }, ...prev]);
        playNotifications("RECV");
      } else {
        setNotifications((prev) => [info, ...prev]);
        playNotifications("UN");
      }
    });
    return () => {
      socket.off("getNewMessage");
      socket.off("sendNotification");
    };
  }, [socket, currentChat, chatList]);

  // MANAGE NOTIFICATIONS

  return (
    <>
      <ChatContext.Provider
        value={{
          userChat,
          selectedChat,
          chatList,
          chatLoading,
          potentialChats,
          potentialChatsLoading,
          allUsers,
          createChat,
          currentChat,
          updateCurrentChat,
          messages,
          messagesLoading,
          sendTextMessage,
          onlineUsers,
          notifications,
          openNewChat,
          markAllAsRead,
          setIsNewFriendAdded,
        }}
      >
        {children}
      </ChatContext.Provider>
    </>
  );
};

export default ChatProvider;

export const useChat = () => {
  return useContext(ChatContext);
};

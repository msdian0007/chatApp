import { useEffect } from "react";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useChat } from "../../context/chatContext";
import { UserChatListSkeleton } from "../skeleton";
import { UserNotificationCount } from "../../utils/UnreadNotifications";
import { useFetchChat } from "../../hooks/useFetchChat";
import moment from "moment";

export default function UserChat({ chat, user, index, setIsChatBoxOpen }) {
  const { onlineUsers, notifications, updateCurrentChat, messages } = useChat();
  const { getRecipient, recipient, recipientLoading } = useFetchUser();
  const { getLatestMessage, lastMessage } = useFetchChat();

  const unreadNotifications = UserNotificationCount(
    notifications,
    recipient?._id
  );

  const isUserOnline = (id) => {
    const isOnline = onlineUsers.some((u) => u.userId === id);
    return (
      isOnline && (
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
      )
    );
  };
  const getNameInitial = (name) => {
    return name
      .split(" ")
      .map((n) => n.charAt(0).toUpperCase())
      .join("");
  };

  const showLatestMessage = (m) => {
    if (lastMessage && m?.senderId !== recipient?._id) {
      return (
        <div className="flex text-[12px]">
          <div className="font-bold text-orange-400 pr-1">you:</div>
          <div className="text-clip overflow-hidden">{lastMessage?.text}</div>
        </div>
      );
    } else {
      return <div className="text">{lastMessage?.text}</div>;
    }
  };

  const handleCurrentChat = () => {
    updateCurrentChat(chat, recipient?._id);
    setIsChatBoxOpen(true);
  };

  useEffect(() => {
    getRecipient(chat, user);
  }, [chat]);

  useEffect(() => {
    getLatestMessage(chat?._id);
  }, [notifications, messages]);
  return (
    <>
      {recipientLoading ? (
        <UserChatListSkeleton />
      ) : (
        <div
          className="user-card flex justify-between items-center p-2 cursor-pointer"
          onClick={handleCurrentChat}
        >
          <div className="flex items-center gap-2">
            <div className="relative w-9 h-9">
              <div className="w-full h-full rounded-full object-cover bg-slate-400 text-center content-center">
                {getNameInitial(recipient?.name)}
              </div>
              {isUserOnline(recipient?._id)}
            </div>
            <div className="text-content">
              <div className="name">{recipient?.name}</div>
              {showLatestMessage(lastMessage)}
            </div>
          </div>
          <div className="grid text-right items-end">
            <div className="date !text-[12px]">
              {moment(lastMessage?.updatedAt).calendar()}
            </div>
            {unreadNotifications ? (
              <div className="flex justify-end">
                <span className="this-user-notifications">
                  {unreadNotifications}
                </span>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}

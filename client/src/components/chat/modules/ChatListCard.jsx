import { useEffect, useState } from "react";
import { useChat } from "../../../context/chatContext";
import { useFetchUser } from "../../../hooks/useFetchUser";
import { useFetchChat } from "../../../hooks/useFetchChat";
import { useHelper } from "../../../hooks/useHelper";
import { UserNotificationCount } from "../../../utils/NotificationsHelper";
import { UserChatListSkeleton } from "../../skeleton";
import {
  getUnreadNotificationsCount,
  isUserOnline,
  showLatestMessage,
} from "../../../utils/FriendReqNotifHelper";
import moment from "moment";
import { useAuth } from "../../../context/authContext";

export default function ChatListCard({ chat, setIsChatBoxOpen }) {
  const { onlineUsers, notifications, updateCurrentChat, messages } = useChat();
  const { getRecipient, recipient, recipientLoading } = useFetchUser();
  const { getLatestMessage, lastMessage } = useFetchChat();
  const { getDpName } = useHelper();
  const { user } = useAuth();

  const unreadNotifications = UserNotificationCount(
    notifications,
    recipient?._id
  );
  const [notificationCount, setNotificationCount] = useState(0);

  const handleCurrentChat = () => {
    updateCurrentChat(chat, recipient?._id);
    setIsChatBoxOpen(true);
    setNotificationCount(0);
  };

  useEffect(() => {
    const recipientId = chat?.members.find((id) => id !== user?._id);
    const res = chat?.unreadCounts?.find((uc) => uc.userId !== recipientId);
    recipientId && getRecipient(recipientId);
    setNotificationCount(res?.count);
  }, [chat]);

  useEffect(() => {
    getLatestMessage(chat?._id);
  }, [notifications, messages]);
  return (
    <>
      {!recipient || recipientLoading ? (
        <UserChatListSkeleton />
      ) : (
        <div
          className="flex items-center justify-between p-2 cursor-pointer user-card"
          onClick={handleCurrentChat}
        >
          <div className="flex items-center gap-2">
            <div className="relative w-9 h-9">
              <div className="content-center object-cover w-full h-full text-center rounded-full bg-slate-400">
                {getDpName(recipient?.firstName + " " + recipient?.lastName)}
              </div>
              {isUserOnline(recipient?._id, onlineUsers)}
            </div>
            <div className="text-content">
              <div className="name">
                {recipient?.firstName + " " + recipient?.lastName}
              </div>
              {showLatestMessage(lastMessage, recipient)}
            </div>
          </div>
          <div className="grid items-end text-right">
            <div className="date !text-[12px]">
              {moment(lastMessage?.updatedAt).calendar()}
            </div>
            {getUnreadNotificationsCount(
              notificationCount,
              unreadNotifications
            )}
          </div>
        </div>
      )}
    </>
  );
}

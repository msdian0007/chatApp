import React from "react";
import { useAuth } from "../../../context/authContext";
import { useHelper } from "../../../hooks/useHelper";
import { useChat } from "../../../context/chatContext";
import { isUserOnline } from "../../../utils/FriendReqNotifHelper";
import { Spin } from "antd";

export const PotentialChatListCard = ({ chat }) => {
  const { user } = useAuth();
  const { getDpName } = useHelper();
  const { createChat, onlineUsers, selectedChat } = useChat();
  return (
    <>
      {selectedChat === chat?._id ? (
        <div className="flex flex-col items-center p-2 rounded-lg cursor-pointer w-14">
          <div className="relative w-9 h-9">
            <Spin />
          </div>
        </div>
      ) : (
        <div
          className="flex flex-col items-center rounded-lg cursor-pointer w-14"
          onClick={() => createChat(user?._id, chat?._id)}
        >
          <div className="relative w-9 h-9">
            <div className="w-full h-full rounded-full object-cover text-[12px] bg-violet-600 text-center content-center">
              {getDpName(chat?.firstName, chat?.lastName)}
            </div>
            {isUserOnline(chat?._id, onlineUsers)}
          </div>
          <div className="mt-1 text-[10px] text-center">{chat?.firstName}</div>
        </div>
      )}
    </>
  );
};

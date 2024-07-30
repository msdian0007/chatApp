import { useChat } from "../../context/chatContext";
import { PotentialChatsSkeleton } from "../skeleton";
import _ from "lodash";
import React from "react";
import { useAuth } from "../../context/authContext";
import { useHelper } from "../../hooks/useHelper";
import { isUserOnline } from "../../utils/FriendReqNotifHelper";

const PotentialChats = React.memo(() => {
  const { potentialChats, createChat, onlineUsers, potentialChatsLoading } =
    useChat();
  const { user } = useAuth();
  const { getDpName } = useHelper();
  return (
    <>
      <div className="flex justify-around gap-4 overflow-x-scroll overflow-y-hidden shadow-lg md:gap-14 scrollbar ">
        {potentialChatsLoading
          ? [1, 2, 3, 4, 5].map((_, i) => <PotentialChatsSkeleton key={i} />)
          : potentialChats &&
            potentialChats.map((pc, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col items-center p-2 rounded-lg cursor-pointer w-14"
                  onClick={() => createChat(user?._id, pc?._id)}
                >
                  <div className="relative w-9 h-9">
                    <div className="w-full h-full rounded-full object-cover text-[12px] bg-violet-600 text-center content-center">
                      {getDpName(pc?.firstName, pc?.lastName)}
                    </div>
                    {isUserOnline(pc._id, onlineUsers)}
                  </div>
                  <div className="mt-1 text-[10px] text-center">
                    {pc?.firstName}
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
});

PotentialChats.displayName = "PotentialChats";
export default PotentialChats;

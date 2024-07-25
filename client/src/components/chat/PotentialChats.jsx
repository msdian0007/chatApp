import { Skeleton } from "antd";
import { useChat } from "../../context/chatContext";
import { PotentialChatsSkeleton } from "../skeleton";

export const PotentialChats = ({ user }) => {
  const { potentialChats, createChat, onlineUsers, potentialChatsLoading } =
    useChat();
  const isUserOnline = (id) => {
    const isOnline = onlineUsers.some((u) => u.userId === id);
    return (
      isOnline && (
        <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 border-[1px] border-white rounded-full"></div>
      )
    );
  };
  const getNameInitial = (name) => {
    return name
      .split(" ")
      .map((n) => n.charAt(0).toUpperCase())
      .join("");
  };
  return (
    <>
      <div className="flex gap-2 overflow-x-scroll overflow-y-hidden scrollbar">
        {potentialChatsLoading ? (
          <PotentialChatsSkeleton />
        ) : (
          potentialChats &&
          potentialChats.map((pc, i) => {
            return (
              <div
                key={i}
                className="flex flex-col items-center p-2 mb-2 border-b-2 rounded-lg cursor-pointer w-14"
                onClick={() => createChat(user?._id, pc?._id)}
              >
                <div className="relative w-7 h-7">
                  <div className="w-full h-full rounded-full object-cover text-[12px] bg-violet-600 text-center content-center">
                    {getNameInitial(pc?.firstName + " " + pc?.lastName)}
                  </div>
                  {isUserOnline(pc._id)}
                </div>
                <div className="mt-1 text-[9px] text-center">
                  {pc?.firstName}
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

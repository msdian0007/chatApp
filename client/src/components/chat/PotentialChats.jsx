import { useChat } from "../../context/chatContext";
import { PotentialChatsSkeleton } from "../skeleton";
import React from "react";
import { PotentialChatListCard } from "./modules/PotentialChatListCard";

const PotentialChats = React.memo(() => {
  const { potentialChats, createChat, onlineUsers } = useChat();
  return (
    <>
      <div className="flex justify-around gap-4 overflow-x-scroll  md:gap-14 scrollbar">
        {/* {userChatLoading
          ? [1, 2, 3, 4, 5].map((_, i) => <PotentialChatsSkeleton key={i} />)
          : potentialChats?.length > 0 &&
            potentialChats.map((pc, i) => {
              return <PotentialChatListCard chat={pc} key={pc?._id} />;
            })} */}
        {potentialChats?.length > 0 &&
          potentialChats.map((pc, i) => {
            return <PotentialChatListCard chat={pc} key={pc?._id} />;
          })}
      </div>
    </>
  );
});

PotentialChats.displayName = "PotentialChats";
export default PotentialChats;

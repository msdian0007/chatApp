import { useChat } from "../context/chatContext";
import { useAuth } from "../context/authContext";
import UserChat from "../components/chat/UserChat";
import { PotentialChats } from "../components/chat/PotentialChats";
import { ChatBox } from "../components/chat/ChatBox";
import { useState } from "react";
import { SearchUsers } from "../components/chat/SearchUsers";

export const Chat = () => {
  const { userChat, chatLoading } = useChat();
  const { user } = useAuth();

  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
  return (
    <>
      <div className="grid grid-cols-8">
        <div
          className={`${
            isChatBoxOpen
              ? "hidden lg:block col-span-3"
              : "lg:col-span-3 col-span-8"
          } "px-3 my-2 border-r-2"`}
        >
          <SearchUsers />
          <PotentialChats user={user} />
          <div>
            {!chatLoading &&
              userChat.map((c, i) => {
                return (
                  <div key={i}>
                    <UserChat
                      chat={c}
                      user={user}
                      index={i}
                      setIsChatBoxOpen={setIsChatBoxOpen}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div
          className={`${
            !isChatBoxOpen ? "hidden lg:block" : "lg:col-span-5 col-span-8"
          } col-span-5 lg:pl-2`}
        >
          <ChatBox user={user} setIsChatBoxOpen={setIsChatBoxOpen} />
        </div>
      </div>
    </>
  );
};

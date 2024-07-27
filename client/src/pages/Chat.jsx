import { useChat } from "../context/chatContext";
import { useAuth } from "../context/authContext";
import UserChat from "../components/chat/UserChat";
import { PotentialChats } from "../components/chat/PotentialChats";
import { ChatBox } from "../components/chat/ChatBox";
import { useState } from "react";
import { SearchUsers } from "../components/chat/SearchUsers";

export const Chat = () => {
  // HOOKS
  const { userChat, chatLoading } = useChat();
  const { user } = useAuth();

  // STATES
  const [isSearching, setIsSearching] = useState(0);
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);

  // CLEAR SEARCH SCREEN
  const handleClearSearchScreen = () => {
    setIsSearching(0);
  };
  return (
    <>
      <div className="grid grid-cols-8">
        <div
          className={`${
            isChatBoxOpen
              ? "hidden lg:block col-span-3"
              : "lg:col-span-3 col-span-8 relative"
          } "px-3 mb-2  "`}
        >
          <SearchUsers
            setIsSearching={setIsSearching}
            isSearching={isSearching}
          />
          <div
            hidden={!isSearching}
            onClick={handleClearSearchScreen}
            className="absolute rounded-md z-10 w-full min-h-[calc(100vh-15vh)] bg-black bg-opacity-85"
          ></div>
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

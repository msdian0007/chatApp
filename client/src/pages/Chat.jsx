import PotentialChats from "../components/chat/PotentialChats";
import { ChatBox } from "../components/chat/ChatBox";
import { useCallback, useState } from "react";
import { SearchUsers } from "../components/chat/SearchUsers";
import ChatList from "../components/chat/ChatList";

export const Chat = () => {
  // STATES
  const [isSearching, setIsSearching] = useState(0);
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);

  // CLEAR SEARCH SCREEN
  const handleClearSearchScreen = useCallback(() => {
    setIsSearching(0);
  }, []);

  return (
    <>
      <div className="grid grid-cols-8">
        <div
          className={`${
            isChatBoxOpen
              ? "hidden md:block col-span-3"
              : "md:col-span-3 col-span-8 relative"
          } px-2 w-full`}
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
          <div className="relative max-h-[calc(100vh-18vh)] overflow-scroll">
            <PotentialChats />
            <ChatList setIsChatBoxOpen={setIsChatBoxOpen} />
          </div>
        </div>
        <div
          className={`${
            !isChatBoxOpen ? "hidden md:block" : "md:col-span-5 col-span-8"
          } col-span-5 content-center`}
        >
          <ChatBox setIsChatBoxOpen={setIsChatBoxOpen} />
        </div>
      </div>
    </>
  );
};

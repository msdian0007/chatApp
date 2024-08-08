import { useChat } from "../../context/chatContext";
import { UserChatListSkeleton } from "../skeleton";
import ChatListCard from "./modules/ChatListCard";

export default function ChatList({ setIsChatBoxOpen }) {
  const { chatList, chatLoading } = useChat();
  return (
    <>
      <div className="">
        {chatList.length < 1
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((_, i) => (
              <UserChatListSkeleton key={i} />
            ))
          : chatList.map((c, i) => {
              return (
                <ChatListCard
                  key={c?._id}
                  chat={c}
                  setIsChatBoxOpen={setIsChatBoxOpen}
                />
              );
            })}
      </div>
    </>
  );
}

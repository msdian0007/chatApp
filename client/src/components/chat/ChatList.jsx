import { useChat } from "../../context/chatContext";
import ChatListCard from "./modules/ChatListCard";

export default function ChatList({ setIsChatBoxOpen }) {
  const { chatList, chatLoading } = useChat();
  return (
    <>
      <div className="max-h-[calc(100vh-29vh)] overflow-y-auto w-full   ">
        {chatList.map((c, i) => {
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

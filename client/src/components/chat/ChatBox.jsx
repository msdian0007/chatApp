import moment from "moment";
import { useChat } from "../../context/chatContext";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useEffect, useRef, useState } from "react";
import InputEmoji from "react-input-emoji";
import { ChatMessagesSkeleton } from "../skeleton";
import { ArrowLeftOutlined } from "@ant-design/icons";

export const ChatBox = ({ user, setIsChatBoxOpen }) => {
  const { messages, messagesLoading, currentChat, sendTextMessage } = useChat();
  const { loading, recipient, getRecipient } = useFetchUser();
  const [textMessage, setTextMessage] = useState("");
  const messageScrollRef = useRef();

  useEffect(() => {
    getRecipient(currentChat, user);
  }, [currentChat]);

  useEffect(() => {
    messageScrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (messagesLoading) return <ChatMessagesSkeleton />;
  if (!currentChat)
    return (
      <div className="chat-box content-center min-h-[calc(100vh-8vh)]">
        <div className="flex justify-center ">...No conversation selected</div>
      </div>
    );

  return (
    <>
      <div className="chat-box relative min-h-[calc(100vh-8vh)]">
        <div className="chat-header !flex !justify-between">
          <div
            className="cursor-pointer lg:text-lg text-xl pl-2"
            onClick={() => setIsChatBoxOpen(false)}
          >
            <ArrowLeftOutlined />
          </div>
          <strong>{recipient?.name}</strong>
          <span></span>
        </div>
        <div className="messages lg:pb-[46px] pt-2 pb-5 px-1 lg:px-4">
          {messages &&
            messages.map((m, i) => (
              <div
                ref={messageScrollRef}
                key={i}
                className={`${
                  m.senderId === user?._id ? "message self " : "message "
                } `}
              >
                <div>{m.text}</div>
                <div className="message-footer">
                  {moment(m.createdAt).calendar()}
                </div>
              </div>
            ))}
        </div>
        <div className="chat-input absolute left-0 right-0 bottom-0 flex justify-between items-center">
          <InputEmoji
            value={textMessage}
            onChange={(e) => setTextMessage(e)}
            fontFamily="nunito"
            borderColor="rgba(72, 112, 223, 0.2)"
          />
          <button
            className=" bg-sky-600 items-end content-center rounded-full h-8 w-8"
            onClick={() =>
              sendTextMessage(
                textMessage,
                user?._id,
                currentChat._id,
                setTextMessage
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="currentColor"
              className="bi bi-send scale-75"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

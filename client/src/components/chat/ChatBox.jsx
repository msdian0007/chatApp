import moment from "moment";
import { useChat } from "../../context/chatContext";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useCallback, useEffect, useRef, useState } from "react";

import { ChatMessagesSkeleton } from "../skeleton";
import { ArrowLeftOutlined, SendOutlined } from "@ant-design/icons";
import { InputEmojiWrapper } from "./EmojiWrapper";

export const ChatBox = ({ user, setIsChatBoxOpen }) => {
  const { messages, messagesLoading, currentChat, sendTextMessage } = useChat();
  const { loading, recipient, getRecipient } = useFetchUser();
  const [textMessage, setTextMessage] = useState("");
  const messageScrollRef = useRef();

  useEffect(() => {
    const recipientId = currentChat?.members.find((id) => id !== user?._id);
    recipientId && getRecipient(recipientId);
  }, [currentChat]);

  useEffect(() => {
    messageScrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleOnMessageType = useCallback((text) => {
    setTextMessage(text);
  }, []);

  if (messagesLoading) return <ChatMessagesSkeleton />;
  if (!currentChat)
    return (
      <div className="chat-box content-center min-h-[calc(100vh-12vh)]">
        <div className="flex justify-center ">...No conversation selected</div>
      </div>
    );

  return (
    <>
      <div className="chat-box relative min-h-[calc(100vh-8vh)]">
        <div className="chat-header min-h-[6vh] !flex !justify-between">
          <div
            className="ml-6 text-xl cursor-pointer lg:text-lg"
            onClick={() => setIsChatBoxOpen(false)}
          >
            <ArrowLeftOutlined />
          </div>
          <strong>{recipient?.firstName}</strong>
          <span></span>
        </div>
        <div className="px-2 pt-2 messages pb-[10vh]">
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
        <div className="absolute bottom-0 left-0 right-0 flex items-center max-h-[10vh] justify-between chat-input">
          <InputEmojiWrapper
            text={textMessage}
            handleChange={handleOnMessageType}
          />
          <SendOutlined 
          className="content-center px-4 py-3 text-xl bg-blue-600 rounded-full"
            onClick={() =>
              sendTextMessage(
                textMessage,
                user?._id,
                currentChat._id,
                setTextMessage
              )
            }
          />
          {/* <button
            className="flex items-end content-center w-10 my-auto rounded-full h-9 bg-sky-600"
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
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-send"
              viewBox="0 0 16 16"
            >
              <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z" />
            </svg>
          </button> */}
        </div>
      </div>
    </>
  );
};

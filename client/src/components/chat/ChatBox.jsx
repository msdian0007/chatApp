import moment from "moment";
import { useChat } from "../../context/chatContext";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useCallback, useEffect, useRef, useState } from "react";

import { ChatMessagesSkeleton } from "../skeleton";
import { ArrowLeftOutlined, SendOutlined } from "@ant-design/icons";
import { InputEmojiWrapper } from "./modules/EmojiWrapper";
import { useAuth } from "../../context/authContext";
import chatAnimImg from "../../assets/images/Chat-amico.png";

export const ChatBox = ({ setIsChatBoxOpen }) => {
  const {
    messages,
    messagesLoading,
    currentChat,
    sendTextMessage,
    updateCurrentChat,
  } = useChat();
  const { loading, recipient, getRecipient } = useFetchUser();
  const [textMessage, setTextMessage] = useState("");
  const messageScrollRef = useRef();
  const { user } = useAuth();
  const recipientId = currentChat?.members.find((id) => id !== user?._id);

  useEffect(() => {
    recipientId && getRecipient(recipientId);
  }, [currentChat]);

  useEffect(() => {
    // messageScrollRef.current?.scrollIntoView({ behavior: "smooth" });
    const chatBoxRef = messageScrollRef.current;
    if (chatBoxRef?.scrollHeight) {
      chatBoxRef.scrollTop = chatBoxRef?.scrollHeight;
    }
  }, [messages]);

  const handleOnMessageType = useCallback((text) => {
    setTextMessage(text);
  }, []);

  const handleCurrentChat = () => {
    updateCurrentChat(null, null);
    setIsChatBoxOpen(false);
  };

  if (messagesLoading) return <ChatMessagesSkeleton />;
  if (!currentChat)
    return (
      <div className="chat-box content-center min-h-[calc(100vh-12vh)]">
        <div className="flex justify-center ">
          <img className="max-w-md" src={chatAnimImg} />
        </div>
      </div>
    );

  return (
    <>
      <div className="chat-box relative min-h-[calc(100vh-9vh)]">
        <div className="chat-header min-h-[6vh] !flex !justify-between">
          <div
            className="ml-3 text-xl cursor-pointer lg:text-lg"
            onClick={handleCurrentChat}
          >
            <ArrowLeftOutlined />
          </div>
          <strong>{recipient?.firstName}</strong>
          <span></span>
        </div>
        <div className="px-2 pt-2 messages pb-[10vh]" ref={messageScrollRef}>
          {messages &&
            messages.map((m, i) => (
              <div
                key={i}
                className={`${
                  m.senderId === user?._id ? "message self " : "message "
                } `}
              >
                <div>{m.text}</div>
                <div
                  className={`${
                    m.senderId === user?._id
                      ? "message-footer self"
                      : "message-footer "
                  } `}
                >
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
                recipientId,
                currentChat._id,
                setTextMessage
              )
            }
          />
        </div>
      </div>
    </>
  );
};

import moment from "moment";
import React from "react";

export const ChatAndMessagingHelper = () => {
  return {
    sendAndReceivedMessages: (messages, user) => {
      return (
        <>
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
        </>
      );
    },
  };
};

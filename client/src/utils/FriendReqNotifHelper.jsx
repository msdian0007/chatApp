import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Tag } from "antd";
export const friendRequestNotification = (chatRequest, userId) => {
  const { sender_details, receiver_details } = chatRequest;
  if (chatRequest.sender === userId) {
    return (
      <div className="flex flex-col">
        <div>
          <span className="font-bold text-orange-600">
            {receiver_details.firstName + " " + receiver_details.lastName + " "}
          </span>
          {chatRequest.status === "accepted" ? (
            <Tag color="success" icon={<CheckCircleOutlined />}>
              accepted
            </Tag>
          ) : (
            <Tag color="default" icon={<ClockCircleOutlined />}>
              pending
            </Tag>
          )}
        </div>
        <span>{receiver_details.phoneNumber}</span>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        <div>
          <span className="font-bold text-orange-600">
            {sender_details.firstName + " " + sender_details.lastName + " "}
          </span>
          {chatRequest.status === "accepted" ? (
            <Tag color="success" icon={<CheckCircleOutlined />}>
              friendzz
            </Tag>
          ) : (
            <Tag color="default" icon={<ClockCircleOutlined />}>
              pending
            </Tag>
          )}
        </div>
        <span>{sender_details.phoneNumber}</span>
      </div>
    );
  }
};

export const getUnreadNotificationsCount = (nc, unc) => {
  let dbCount = 0;
  dbCount = typeof nc === "number" ? nc : 0;
  dbCount += unc;
  return dbCount ? (
    <div className="flex justify-end">
      <span className="this-user-notifications">{dbCount}</span>
    </div>
  ) : <></>;
};

export const showLatestMessage = (lastMessage, recipient) => {
  if (lastMessage && lastMessage?.senderId !== recipient?._id) {
    return (
      <div className="flex text-[12px]">
        <div className="pr-1 font-bold text-orange-400">you:</div>
        <div className="truncate">{lastMessage?.text}</div>
      </div>
    );
  } else {
    return <div className="truncate text">{lastMessage?.text}</div>;
  }
};

export const isUserOnline = (id, onlineUsers) => {
  const isOnline = onlineUsers.some((u) => u.userId === id);
  return (
    isOnline && (
      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
    )
  );
};

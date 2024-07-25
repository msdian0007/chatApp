import { CheckCircleOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Tag } from "antd";
export const friendRequestNotification = (chatRequest, userId) => {
  const { sender_details, receiver_details } = chatRequest;
  if (chatRequest.sender === userId) {
    return (
      <div className="flex flex-col">
        <div>
          <span className="font-bold text-orange-600">
            {receiver_details.firstName + " " + receiver_details.lastName+" "}
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
            {sender_details.firstName + " " + sender_details.lastName+" "}
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

import { useAuth } from "../../context/authContext";
import { Avatar, Badge, Button, Popover, Spin } from "antd";
import { useEffect, useState } from "react";
import { UsergroupAddOutlined } from "@ant-design/icons";
import { FriendRequestCard } from "./FriendRequestCard";
import { useFetchUser } from "../../hooks/useFetchUser";
import { useFetchChatRequest } from "../../hooks/useFetchChatRequest";
import { useChat } from "../../context/chatContext";

export const FriendRequests = () => {
  const { user } = useAuth();
  const { setIsNewFriendAdded } = useChat();
  const { getRecipient, recipient, recipientLoading } = useFetchUser();
  const { respondChatRequest } = useFetchChatRequest();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    user && getRecipient(user._id);
  }, [user]);

  const handleRespondChatRequest = async (chatReqId, recipientId, respond) => {
    await respondChatRequest(chatReqId, recipientId, respond);
    await getRecipient(user._id);
    setIsNewFriendAdded(true);
    setIsOpen(false);
  };
  let content = () => {
    return (
      <>
        <div className="grid max-h-[26vh] overflow-y-auto">
          {recipientLoading ? (
            <Spin />
          ) : (
            <>
              {!recipient?.friendRequests?.length ? (
                <div className="text-center text-rose-600">
                  No Chat Requests
                </div>
              ) : (
                recipient?.friendRequests?.map((id, i) => {
                  return (
                    <FriendRequestCard
                      key={i}
                      chatReqId={id}
                      handleRespondChatRequest={handleRespondChatRequest}
                    />
                  );
                }).reverse()
              )}
            </>
          )}
        </div>
      </>
    );
  };
  return (
    <Popover
      placement="bottomRight"
      title={"Chat Requests"}
      content={content}
      trigger="click"
      open={isOpen}
      onOpenChange={() => setIsOpen(!isOpen)}
      //   arrow={mergedArrow}
    >
      <Badge
        className="content-center cursor-pointer"
        size="small"
        //   count={unreadNotifications?.length}
      >
        <Avatar
          className="scale-75 lg:scale-100"
          shape="circle"
          size="default"
          icon={<UsergroupAddOutlined />}
        />
      </Badge>
    </Popover>
  );
};

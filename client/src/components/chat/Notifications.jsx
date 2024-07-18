import { useState } from "react";
import { useChat } from "../../context/chatContext";
import { UnreadNotifications } from "../../utils/UnreadNotifications";
import { Avatar, Badge, Button, Popover } from "antd";
import moment from "moment";
import { useAuth } from "../../context/authContext";

export const Notifications = () => {
  const { user } = useAuth();
  const { notifications, allUsers, openNewChat, markAllAsRead } = useChat();
  const [isOpen, setIsOpen] = useState(false);
  const unreadNotifications = UnreadNotifications(notifications);
  const modifiedNotifications = notifications.map((n) => {
    let sender = allUsers.find((u) => u._id === n.senderId);
    return {
      ...n,
      senderName: sender?.name,
    };
  });

  const handleOpenChat = (fId, sId) => {
    openNewChat(fId, sId);
    setIsOpen(false);
  };
  let content = () => {
    return (
      <>
        <div className="grid">
          {!modifiedNotifications?.length ? (
            <div className="text-center text-rose-600">Empty</div>
          ) : (
            modifiedNotifications.map((n, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    n.isRead ? " text-black/30" : "text-black"
                  } border-slate-300 cursor-pointer border-b-[1px] p-1`}
                  onClick={() => handleOpenChat(n?.senderId, user?._id)}
                >
                  <span className="font-bold ">{n?.senderName}</span>
                  <span> sent a message</span>
                  <span className="text-[10px] pl-4 align-bottom italic">
                    {moment(n?.date).calendar()}
                  </span>
                </div>
              );
            })
          )}
          {modifiedNotifications?.length > 1 ? (
            <div className="flex justify-end pt-3">
              <Button
                className="text-[12px]"
                size="small"
                type="default"
                onClick={() => markAllAsRead(modifiedNotifications)}
              >
                Mark all as read
              </Button>
            </div>
          ) : null}
        </div>
      </>
    );
  };
  return (
    <>
      <Popover
        placement="bottomRight"
        title={"Unread Notifications"}
        content={content}
        trigger="click"
        open={isOpen}
        onOpenChange={() => setIsOpen(!isOpen)}
        //   arrow={mergedArrow}
      >
        <Badge
          className="cursor-pointer content-center"
          size="small"
          count={unreadNotifications?.length}
        >
          <Avatar className="lg:scale-100 scale-75" shape="circle" size="default" icon={"🔔"} />
        </Badge>
      </Popover>
    </>
  );
};

import { Skeleton } from "antd";

export const UserChatListSkeleton = () => {
  return (
    <div className="user-card flex justify-between items-center p-2 cursor-pointer">
      <div className="flex items-center gap-3">
        <div className=" ">
          <Skeleton.Avatar size={"large"} active />
        </div>
        <div className="text-content">
          <Skeleton.Input
            size="small"
            style={{ height: "14px" }}
            block
            active
          />
          <Skeleton.Input size="small" style={{ height: "10px" }} active />
        </div>
      </div>
    </div>
  );
};

export const PotentialChatsSkeleton = () => (
  <div className="flex flex-col gap-1 items-center w-6 pl-8">
    <Skeleton.Avatar active />
    <Skeleton.Button active size="small" style={{ height: "6px" }} />
  </div>
);

export const ChatMessagesSkeleton = () => (
  <div className="chat-box content-center !bg-neutral-700 min-h-[calc(100vh-8vh)]">
    <div className="messages pb-4 px-1 lg:px-4">
      <Skeleton.Input className="message self !p-0 !bg-transparent" active />
      <Skeleton.Input className="message !p-0 !bg-transparent" active />
      <Skeleton.Input className="message !p-0 !bg-transparent" active />
      <Skeleton.Input className="message !p-0 !bg-transparent" active />
      <Skeleton.Input className="message !p-0 !bg-transparent" active />
      <Skeleton.Input className="message self !p-0 !bg-transparent" active />
      <Skeleton.Input className="message self !p-0 !bg-transparent" active />
      <Skeleton.Input className="message self !p-0 !bg-transparent" active />
      <Skeleton.Input className="message self !p-0 !bg-transparent" active />
      <Skeleton.Input className="message !p-0 !bg-transparent" active />
    </div>
  </div>
);

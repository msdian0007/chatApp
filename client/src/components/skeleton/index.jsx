import { Skeleton } from "antd";

export const UserChatListSkeleton = () => {
  return (
    <div className="flex items-center justify-between p-2 cursor-pointer user-card">
      <div className="flex items-center gap-3">
        <div className="">
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
  <div className="flex flex-col items-center content-center w-6 gap-2 pl-6 ">
    <Skeleton.Avatar active size={"large"}/>
    <Skeleton.Button active size="default" style={{ height: "6px" }} />
  </div>
);

export const ChatMessagesSkeleton = () => (
  <div className="chat-box content-center !bg-neutral-700 min-h-[calc(100vh-8vh)]">
    <div className="px-1 pb-4 messages lg:px-4">
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

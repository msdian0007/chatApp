import { Button } from "antd";
import { useHelper } from "../../hooks/useHelper";

export const UserListCard = ({ u, handleChatRequest, chatReqLoading }) => {
  const { getDpName } = useHelper();
  return (
    <div className="flex items-center justify-between p-2 cursor-pointer">
      <div className="flex items-center gap-2">
        <div className="relative w-9 h-9">
          <div className="content-center object-cover w-full h-full text-center rounded-full bg-slate-400">
            {getDpName(u?.firstName, u?.lastName)}
          </div>
        </div>
        <div className="text-content">
          <div className="name">{u?.firstName + " " + u?.lastName}</div>
        </div>
      </div>
      <Button
        loading={chatReqLoading}
        onClick={() => handleChatRequest(u?._id)}
        className="content-center px-2 py-1 text-right "
      >
        Chat Request
      </Button>
    </div>
  );
};

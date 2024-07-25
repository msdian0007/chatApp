import { useHelper } from "../../hooks/useHelper";

export const UserListCard = ({ u, handleChatRequest }) => {
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
      <div
        onClick={() => handleChatRequest(u?._id)}
        className="grid items-end content-center px-2 text-sm text-right bg-orange-600 rounded-md cursor-pointer hover:bg-orange-700 "
      >
        Chat Request
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { LoadingOutlined, SearchOutlined } from "@ant-design/icons";
import { useFetchUser } from "../../hooks/useFetchUser";
import { UserListCard } from "./UserListCard";
import { useFetchChat } from "../../hooks/useFetchChat";
import { useAuth } from "../../context/authContext";
import { message } from "antd";

export const SearchUsers = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const {
    searchedUsersLoading,
    searchedUsers,
    setSearchedUsers,
    searchUsersByPhoneNumber,
  } = useFetchUser();
  const { sendChatRequest } = useFetchChat();
  const { user } = useAuth();

  const handleSearch = () => {
    if (!phoneNumber) return;
    searchUsersByPhoneNumber(phoneNumber);
  };
  const handleChatRequest = async (id) => {
    if (user?._id === id) return message.warning("Abey saale 🙂");
    await sendChatRequest(user?._id, id);
    setSearchedUsers([]);
    setPhoneNumber("");
  };
  return (
    <div className="max-w-[400px] text-center ">
      <div className="relative w-3/4 mx-auto">
        <input
          type="number"
          placeholder="search friends..."
          className="w-full px-3 py-1 text-sm rounded-md bg-black/45"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <div className="absolute content-center px-4 bg-orange-600 rounded-md hover:bg-orange-700 bottom-1 top-1 right-2">
          {searchedUsersLoading ? (
            <LoadingOutlined />
          ) : (
            <SearchOutlined className="cursor-pointer" onClick={handleSearch} />
          )}
        </div>
        {searchedUsersLoading ? (
          <></>
        ) : (
          searchedUsers?.length > 0 && (
            <div className="absolute w-full py-2 mt-4 border rounded-md border-black/35 bg-black/55">
              {searchedUsers?.map((u, i) => {
                return (
                  <UserListCard
                    u={u}
                    key={i}
                    handleChatRequest={handleChatRequest}
                  />
                );
              })}
            </div>
          )
        )}
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import {
  LoadingOutlined,
  PoweroffOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { useFetchUser } from "../../hooks/useFetchUser";
import { UserListCard } from "./modules/UserListCard";
import { useFetchChat } from "../../hooks/useFetchChat";
import { useAuth } from "../../context/authContext";
import { Button, message } from "antd";

export const SearchUsers = ({ setIsSearching, isSearching }) => {
  // HOOKS
  const {
    searchedUsersLoading,
    searchedUsers,
    setSearchedUsers,
    searchUsersByPhoneNumber,
  } = useFetchUser();
  const { sendChatRequest, chatReqLoading } = useFetchChat();
  const { user } = useAuth();

  // STATES
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSearch = () => {
    if (!phoneNumber) return;
    searchUsersByPhoneNumber(phoneNumber);
  };

  const handleChatRequest = async (id) => {
    if (user?._id === id) return message.warning("Abey saale 🙂");
    await sendChatRequest(user?._id, id);
    setSearchedUsers([]);
    setPhoneNumber("");
    setIsSearching(0);
  };

  // TO CLEAR SEARCHING SCREEN
  useEffect(() => {
    setSearchedUsers([]);
    setPhoneNumber("");
  }, [isSearching]);

  return (
    <div className="py-2 text-center ">
      <div className="relative mx-2 ">
        <input
          type="number"
          placeholder={`${
            isSearching ? "Enter phone number..." : "search friends..."
          }`}
          className={`${
            isSearching ? "placeholder-orange-400" : ""
          } z-30 w-full h-10 px-3 py-1 text-sm rounded-full lg:h-10 bg-black/45`}
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          onClick={() => setIsSearching(1)}
        />
        {searchedUsersLoading ? (
          <Button
            className="absolute  border-0 !content-center rounded-full !px-7  !right-1 top-1 h-auto bottom-1"
            icon={<PoweroffOutlined />}
            loading
          />
        ) : (
          <Button
            className="absolute bg-orange-500 text-white border-0 !content-center rounded-full !px-7  !right-1 top-1 h-auto bottom-1"
            icon={<SearchOutlined />}
            onClick={handleSearch}
          />
        )}
        {/* <div className="absolute content-center px-4 bg-orange-600 rounded-md hover:bg-orange-700 bottom-1 top-1 right-2">
          {searchedUsersLoading ? (
            <LoadingOutlined />
          ) : (
            <SearchOutlined
              className="flex my-auto cursor-pointer"
              onClick={handleSearch}
            />
          )}
        </div> */}
        {searchedUsersLoading ? (
          <></>
        ) : (
          searchedUsers?.length > 0 && (
            <div className="absolute z-20 w-full py-2 mt-4 bg-gray-700 border rounded-md border-black/35">
              {searchedUsers?.map((u, i) => {
                return (
                  <UserListCard
                    u={u}
                    key={i}
                    handleChatRequest={handleChatRequest}
                    chatReqLoading={chatReqLoading}
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

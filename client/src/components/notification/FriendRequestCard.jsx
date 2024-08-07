import moment from "moment";
import React, { useEffect } from "react";
import { useFetchChatRequest } from "../../hooks/useFetchChatRequest";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { useAuth } from "../../context/authContext";
import { friendRequestNotification } from "../../utils/FriendReqNotifHelper";
import { Spin } from "antd";

export const FriendRequestCard = ({
  chatReqId,
  handleRespondChatRequest,
  loadingChatRespond,
}) => {
  const { chatRequest, getChatRequestById } = useFetchChatRequest();
  const { user } = useAuth();
  useEffect(() => {
    getChatRequestById(chatReqId);
  }, [chatReqId]);
  return (
    <>
      {chatRequest ? (
        <div>
          <div className="border-slate-300 cursor-pointer border-b-[1px] py-1 flex justify-between">
            {friendRequestNotification(chatRequest, user?._id)}
            <div className="flex flex-col text-lg text-right">
              {chatRequest.status !== "accepted" &&
              chatRequest.sender !== user?._id ? (
                <>
                  {loadingChatRespond === chatReqId ? (
                    <Spin />
                  ) : (
                    <div className="flex justify-end gap-3">
                      <div
                        className="px-4 py-0 text-gray-500 bg-green-500 rounded-md"
                        onClick={() =>
                          handleRespondChatRequest(
                            chatReqId,
                            chatRequest?.receiver,
                            "accept"
                          )
                        }
                      >
                        <CheckCircleOutlined />
                      </div>
                      <div
                        className="px-4 py-0 text-gray-200 rounded-md bg-rose-600"
                        onClick={() =>
                          handleRespondChatRequest(
                            chatReqId,
                            chatRequest?.receiver,
                            "reject"
                          )
                        }
                      >
                        <CloseCircleOutlined />
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <span className="text-right">
                  <SmileOutlined />
                </span>
              )}
              <span className="text-[10px] pl-4 align-bottom italic">
                {moment(
                  chatRequest.status !== "accepted"
                    ? chatRequest?.sentAt
                    : chatRequest?.respondedAt
                ).calendar()}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

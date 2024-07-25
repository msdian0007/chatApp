import moment from "moment";
import React, { useEffect } from "react";
import { useFetchChatRequest } from "../../hooks/useFetchChatRequest";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import { Spin } from "antd";
import { useAuth } from "../../context/authContext";
import { friendRequestNotification } from "../../utils/FriendReqNotifHelper";

export const FriendRequestCard = ({ chatReqId, handleRespondChatRequest }) => {
  const { chatRequest, getChatRequestById } = useFetchChatRequest();
  const { user } = useAuth();
  useEffect(() => {
    getChatRequestById(chatReqId);
  }, [chatReqId]);
  return (
    <>
      {chatRequest ? (
        <div>
          <div className="border-slate-300 cursor-pointer border-b-[1px] p-1 flex justify-between">
            {friendRequestNotification(chatRequest, user?._id)}
            <div className="flex flex-col text-lg text-right">
              {chatRequest.status !== "accepted" &&
              chatRequest.sender !== user?._id ? (
                <span className="flex justify-end gap-2">
                  <CheckCircleOutlined
                    style={{ color: "green" }}
                    onClick={() =>
                      handleRespondChatRequest(
                        chatReqId,
                        chatRequest?.receiver,
                        "accept"
                      )
                    }
                  />
                  <CloseCircleOutlined
                    style={{ color: "red" }}
                    onClick={() =>
                      handleRespondChatRequest(
                        chatReqId,
                        chatRequest?.receiver,
                        "reject"
                      )
                    }
                  />
                </span>
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

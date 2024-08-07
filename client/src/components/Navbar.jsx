import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Notifications } from "./chat/Notifications";
import { FriendRequests } from "./notification/FriendRequests";
import { Dropdown } from "antd";
import {
  LoginOutlined,
  MenuOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

export const Navbar = () => {
  const { user, logOut } = useAuth();
  const nav = useNavigate();
  const items = !user
    ? [
        {
          label: "Login",
          key: "1",
          icon: <LoginOutlined />,
          onClick: () => {
            nav("/login");
          },
        },
        {
          label: "Register",
          key: "2",
          icon: <LoginOutlined />,
          onClick: () => {
            nav("/register");
          },
        },
      ]
    : [
        {
          label: "Logout",
          key: "1",
          icon: <PoweroffOutlined />,
          onClick: () => {
            logOut();
          },
        },
      ];
  return (
    <>
      <div className=" bg-slate-700">
        <div className="flex justify-between min-h-[8vh]  px-3 ">
          <div className="content-center hidden cursor-pointer lg:block">
            <Link to={"/"}>ChatApp</Link>
          </div>
          <div className="flex gap-1 ">
            {user && (
              <div className="content-center">
                <span>Hi </span>
                <span className="italic text-amber-500">{user?.firstName}</span>
                <span>...</span>
              </div>
            )}
            <div className="content-center italic scale-125">🍁</div>
          </div>
          <div className="flex gap-2 my-auto lg:gap-4">
            {user && (
              <div className="flex gap-2 lg:gap-2">
                <Notifications />
                <FriendRequests />
              </div>
            )}
            <Dropdown menu={{ items }} trigger={["click"]}>
              <a
                className="flex content-center pl-3"
                onClick={(e) => e.preventDefault()}
              >
                <MenuOutlined className="text-xl" />
              </a>
            </Dropdown>
          </div>
        </div>
      </div>
    </>
  );
};

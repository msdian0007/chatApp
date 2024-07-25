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
        <div className="flex justify-between min-h-[8vh] lg:px-[56px] px-3 ">
          <div className="content-center hidden cursor-pointer lg:block">
            <Link to={"/"}>ChatApp</Link>
          </div>
          <div className="flex gap-1 ">
            <div className="content-center italic scale-125">🍁</div>
            {user && (
              <div className="content-center">
                <span>Hi </span>
                <span className="italic text-amber-500">{user?.firstName}</span>
              </div>
            )}
          </div>
          <div className="flex gap-2 my-auto lg:gap-6">
            <div className="lg:flex lg:gap-2">
              <FriendRequests />
              <Notifications />
            </div>
            <Dropdown menu={{ items }} trigger={["click"]}>
              <a className="content-center" onClick={(e) => e.preventDefault()}>
                <MenuOutlined />
              </a>
            </Dropdown>
            {/* {!user ? (
              <div className="flex flex-col my-auto text-xs text-right lg:text-md">
                <div>
                  <Link className="cursor-pointer " to={"/login"}>
                    Login
                  </Link>
                </div>
                <div>
                  <Link className="cursor-pointer" to={"/register"}>
                    Register
                  </Link>
                </div>
              </div>
            ) : (
              <div className="content-center text-xs cursor-pointer lg:text-md">
                <a onClick={logOut}>Logout</a>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </>
  );
};

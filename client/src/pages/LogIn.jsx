import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useState } from "react";
import { Button } from "antd";

export const LogIn = () => {
  const { logIn, user, updateLoginInfo, loginInfo, loginLoading } = useAuth();
  const [viewPassword, setHandleViewPassword] = useState(false);
  return (
    <>
      {user ? <Navigate to={"/"} /> : null}
      <div className="flex justify-center min-h-[calc(100vh-10vh)]">
        <div className="grid grid-cols-4 my-auto ">
          <div className="grid grid-cols-1 col-span-4 gap-1 pb-2">
            <label htmlFor="">Phone Number</label>
            <input
              type="number"
              className="px-2 py-1 rounded-md bg-neutral-600"
              onChange={(e) =>
                updateLoginInfo({ ...loginInfo, phoneNumber: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-1 col-span-4 gap-1 pb-7">
            <label htmlFor="">Password</label>
            <div className="relative">
              <input
                type={`${!viewPassword ? "password" : "text"}`}
                className="px-2 py-1 rounded-md bg-neutral-600"
                onChange={(e) =>
                  updateLoginInfo({ ...loginInfo, password: e.target.value })
                }
              />
              <span
                className="absolute cursor-pointer right-2 top-1"
                onClick={() => setHandleViewPassword(!viewPassword)}
              >
                👁
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 col-span-4 gap-1 pb-2">
            <Button onClick={logIn} loading={loginLoading} type="primary">
              Log In
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

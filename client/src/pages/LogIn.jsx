import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { useState } from "react";

export const LogIn = () => {
  const { logIn, user, updateLoginInfo, loginInfo } = useAuth();
  const [viewPassword, setHandleViewPassword] = useState(false);
  return (
    <>
      {user ? <Navigate to={"/"} /> : null}
      <div className="flex justify-center min-h-[calc(100vh-10vh)]">
        <div className="grid grid-cols-4 my-auto ">
          <div className="grid grid-cols-1 col-span-4 gap-1 pb-2">
            <label htmlFor="">Mobile Number</label>
            <input
              type="number"
              className="px-2 py-1 rounded-md bg-neutral-600"
              onChange={(e) =>
                updateLoginInfo({ ...loginInfo, phoneNumber: e.target.value })
              }
            />
          </div>
          <div className="grid grid-cols-1 col-span-4 gap-1 pb-4">
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
            <button
              onClick={logIn}
              className="px-2 py-1 bg-blue-600 rounded-md"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

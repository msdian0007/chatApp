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
          <div className="col-span-4 grid grid-cols-1 gap-1 pb-2">
            <label htmlFor="">Email</label>
            <input
              type="email"
              className="bg-neutral-600 px-2 py-1 rounded-md"
              onChange={(e) =>
                updateLoginInfo({ ...loginInfo, email: e.target.value })
              }
            />
          </div>
          <div className="col-span-4 grid grid-cols-1 gap-1 pb-4">
            <label htmlFor="">Password</label>
            <div className="relative">
              <input
                type={`${!viewPassword ? "password" : "text"}`}
                className="bg-neutral-600 px-2 py-1 rounded-md"
                onChange={(e) =>
                  updateLoginInfo({ ...loginInfo, password: e.target.value })
                }
              />
              <span
                className="cursor-pointer absolute right-2 top-1"
                onClick={() => setHandleViewPassword(!viewPassword)}
              >
                👁
              </span>
            </div>
          </div>
          <div className="col-span-4 grid grid-cols-1 gap-1 pb-2">
            <button
              onClick={logIn}
              className="bg-blue-600 px-2 py-1 rounded-md"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

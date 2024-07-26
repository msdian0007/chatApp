import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Button } from "antd";
import { useState } from "react";
export const Register = () => {
  const {
    registerInfo,
    user,
    updateRegisterInfo,
    registerUser,
    registerLoading,
  } = useAuth();
  const [viewPassword, setHandleViewPassword] = useState(false);
  return (
    <>
      {user ? <Navigate to={"/"} /> : null}
      <form action="">
        <div className="flex justify-center min-h-[calc(100vh-10vh)]">
          <div className="grid grid-cols-4 my-auto ">
            <div className="grid grid-cols-1 col-span-4 gap-1 pb-2">
              <label htmlFor="">First Name</label>
              <input
                type="text"
                className="px-2 py-1 rounded-md bg-neutral-600"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    firstName: e.target.value,
                  })
                }
              />
            </div>
            <div className="grid grid-cols-1 col-span-4 gap-1 pb-2">
              <label htmlFor="">Last Name</label>
              <input
                type="text"
                className="px-2 py-1 rounded-md bg-neutral-600"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    lastName: e.target.value,
                  })
                }
              />
            </div>
            <div className="grid grid-cols-1 col-span-4 gap-1 pb-2">
              <label htmlFor="">Phone Number</label>
              <input
                type="number"
                className="px-2 py-1 rounded-md bg-neutral-600"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    phoneNumber: e.target.value,
                  })
                }
              />
            </div>
            <div className="grid grid-cols-1 col-span-4 gap-1 pb-7">
              <label htmlFor="">Create Password</label>
              <div className="relative">
                <input
                  type={`${!viewPassword ? "password" : "text"}`}
                  className="px-2 py-1 rounded-md bg-neutral-600"
                  onChange={(e) =>
                    updateRegisterInfo({
                      ...registerInfo,
                      password: e.target.value,
                    })
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
              <Button
                onClick={registerUser}
                type="primary"
                loading={registerLoading}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Button } from "antd";
export const Register = () => {
  const { registerInfo, user, updateRegisterInfo, registerUser, loading } = useAuth();
  return (
    <>
      {user ? <Navigate to={"/"} /> : null}
      <form action="">
        <div className="flex justify-center min-h-[calc(100vh-10vh)]">
          <div className="grid grid-cols-4 my-auto ">
            <div className="col-span-4 grid grid-cols-1 gap-1 pb-2">
              <label htmlFor="">Name</label>
              <input
                type="text"
                className="bg-neutral-600 px-2 py-1 rounded-md"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, name: e.target.value })
                }
              />
            </div>
            <div className="col-span-4 grid grid-cols-1 gap-1 pb-2">
              <label htmlFor="">Email</label>
              <input
                type="email"
                className="bg-neutral-600 px-2 py-1 rounded-md"
                onChange={(e) =>
                  updateRegisterInfo({ ...registerInfo, email: e.target.value })
                }
              />
            </div>
            <div className="col-span-4 grid grid-cols-1 gap-1 pb-4">
              <label htmlFor="">Create Password</label>
              <input
                type="password"
                className="bg-neutral-600 px-2 py-1 rounded-md"
                onChange={(e) =>
                  updateRegisterInfo({
                    ...registerInfo,
                    password: e.target.value,
                  })
                }
              />
            </div>
            <div className="col-span-4 grid grid-cols-1 gap-1 pb-2">
              <Button
                onClick={registerUser}
                type="primary"
                loading={loading}
                iconPosition={"end"}
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

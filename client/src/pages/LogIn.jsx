import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

export const LogIn = () => {
  const { logIn, user, updateLoginInfo, loginInfo } = useAuth();

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
            <input
              type="password"
              className="bg-neutral-600 px-2 py-1 rounded-md"
              onChange={(e) =>
                updateLoginInfo({ ...loginInfo, password: e.target.value })
              }
            />
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

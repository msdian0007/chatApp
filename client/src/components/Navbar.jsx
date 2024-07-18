import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Notifications } from "./chat/Notifications";

export const Navbar = () => {
  const { user, logOut } = useAuth();
  return (
    <>
      <div className=" bg-slate-700 ">
        <div className="flex justify-between min-h-[8vh] lg:px-[56px] px-3 ">
          <div className="cursor-pointer content-center hidden lg:block">
            <Link to={"/"}>ChatApp</Link>
          </div>
          <div className=" flex gap-1">
            <div className="content-center italic scale-125">🍁</div>
            {user && (
              <div className="content-center">
                <span>Hi </span>
                <span className="text-amber-500 italic">{user?.name}</span>
              </div>
            )}
          </div>
          <div className="flex gap-1 lg:gap-2">
            <Notifications />
            {!user ? (
              <div className="flex flex-col my-auto text-right lg:text-md text-xs">
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
              <div className="content-center lg:text-md text-xs">
                <a onClick={logOut}>Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

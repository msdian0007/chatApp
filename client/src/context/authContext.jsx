import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import axiosInstance from "../api/axios";
import { notification } from "antd";
import { handleError } from "../utils/handleError";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [registerInfo, setRegisterInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
  });
  const [loginInfo, setLoginInfo] = useState({
    phoneNumber: "",
    password: "",
  });

  const openNotification = (type, message, desc) => {
    notification[type]({
      message,
      desc,
    });
  };

  const registerUser = useCallback(async () => {
    try {
      if (
        !registerInfo.phoneNumber &&
        !registerInfo.password &&
        !registerInfo.firstName &&
        !registerInfo.lastName
      )
        return openNotification("warning", "All fields required");
      const response = await axiosInstance.post("/user/register", registerInfo);
      if (response.data) {
        localStorage.setItem("userData", JSON.stringify(response.data));
        setUser(response.data);
        setLoading(false);
        openNotification("success", response.data.message);
      }
    } catch (error) {
      handleError(error);
    }
  }, [registerInfo]);

  const updateRegisterInfo = useCallback((info) => {
    setRegisterInfo(info);
  }, []);

  const updateLoginInfo = useCallback((info) => {
    setLoginInfo(info);
  }, []);

  const logOut = useCallback(() => {
    localStorage.removeItem("userData");
    setUser(null);
  }, []);

  const logIn = useCallback(async () => {
    try {
      if (!loginInfo.phoneNumber && !loginInfo.password)
        return openNotification("warning", "All fields required");
      const response = await axiosInstance.post("/user/login", loginInfo);
      if (response.data) {
        localStorage.setItem("userData", JSON.stringify(response.data));
        setUser(response.data);
        setLoading(false);
        openNotification("success", response.data.message);
      }
    } catch (error) {
      handleError(error);
    }
  }, [loginInfo]);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    setUser(JSON.parse(userData));
    setLoading(false);
  }, []);

  return (
    <>
      <AuthContext.Provider
        value={{
          user,
          registerInfo,
          updateRegisterInfo,
          registerUser,
          loading,
          logOut,
          logIn,
          loginInfo,
          updateLoginInfo,
        }}
      >
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContext;

export const useAuth = () => {
  return useContext(AuthContext);
};

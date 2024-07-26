import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import axiosInstance from "../api/axios";
import { message } from "antd";
import { handleError } from "../utils/handleError";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [registerLoading, setRegisterLoading] = useState(false);
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
  const registerUser = useCallback(async () => {
    try {
      if (
        !registerInfo.phoneNumber &&
        !registerInfo.password &&
        !registerInfo.firstName &&
        !registerInfo.lastName
      )
        return message.warning("All fields required");
      setRegisterLoading(true);
      const response = await axiosInstance.post("/user/register", registerInfo);
      if (response.data) {
        localStorage.setItem("userData", JSON.stringify(response.data));
        setUser(response.data);
        setRegisterLoading(false);
        message.success(response.data.message);
      }
    } catch (error) {
      setRegisterLoading(false);
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
        return message.success("All fields required");
      setLoginLoading(true);
      const response = await axiosInstance.post("/user/login", loginInfo);
      if (response.data) {
        localStorage.setItem("userData", JSON.stringify(response.data));
        setUser(response.data);
        setLoginLoading(false);
        message.success(response.data.message);
      }
    } catch (error) {
      setLoginLoading(false);
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
          registerLoading,
          registerUser,
          loading,
          logOut,
          logIn,
          loginLoading,
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

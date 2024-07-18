import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/authContext";
import { Spin } from "antd";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  // const { user, loading } = useContext(AuthContext);
  console.log(loading)
  const location = useLocation();
  if (loading) {
    return (
      <div className="h-[100vh] content-center">
          <div className="flex justify-center ">
            <Spin size="large" />
          </div>
        </div>
    );
  } else {
    if (!user) {
      return <Navigate to="/login" state={{ from: location }} />;
    } else {
      return children
    }
  }
};

export default ProtectedRoute;

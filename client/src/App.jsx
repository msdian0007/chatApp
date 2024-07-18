import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import { Chat } from "./pages/Chat";
import { LogIn } from "./pages/LogIn";
import { Register } from "./pages/Register";
import { Navbar } from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/authContext";
import ChatProvider from "./context/chatContext";

function App() {
  const { user } = useAuth();
  return (
    <>
      <ChatProvider user={user}>
        <Navbar />
        <div className="lg:px-[46px]">
          <Routes>
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <Chat />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </ChatProvider>
    </>
  );
}

export default App;

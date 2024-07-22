const { Server } = require("socket.io");
const env = require("dotenv");
env.config();
const { baseURL } = require("./constants");

const io = new Server({
  cors: baseURL,
});

let onlineUsers = [];

io.on("connection", (socket) => {
  // MANAGE NEW ONLINE USER
  socket.on("addOnlineUser", (userId) => {
    if (onlineUsers?.some((user) => user.userId === userId)) return;
    onlineUsers.push({ userId, socketId: socket.id });
    io.emit("getOnlineUsers", onlineUsers);
  });

  // USER OFFLINE
  socket.on("disconnect", () => {
    onlineUsers = onlineUsers.filter((ou) => ou.socketId !== socket.id);
    io.emit("getOnlineUsers", onlineUsers);
  });

  // SEND AND RECEIVE MESSAGES & NOTIFICATIONS
  socket.on("sendNewMessage", (obj) => {
    const user = onlineUsers.find((ou) => ou.userId === obj.recipientId);
    if (user) {
      socket.to(user.socketId).emit("getNewMessage", obj.textMessage);
      socket.to(user.socketId).emit("sendNotification", {
        date: new Date(),
        senderId: obj.textMessage.senderId,
        isRead: false,
      });
    }
  });
});

io.listen(process.env.stage === "prod" ? process.env.PORT : 3001);

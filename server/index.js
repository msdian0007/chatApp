import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/user", userRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/messages", messageRoutes);

let port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is started: ${port}`);
});

let uri = process.env.MONGODB_URI;
mongoose
  .connect(uri)
  .then(() => {
    console.log(`MongoDB connected successfully`);
  })
  .catch((error) => {
    console.log(`MongoDB connection failed: ${error.message}`);
  });

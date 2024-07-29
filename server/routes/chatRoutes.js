import express from "express";
import {
    chatRequestResponse,
  createChat,
  findChat,
  findChats,
  getChatInfo,
  getChatRequest,
  markMessagesAsRead,
  sendChatRequest,
} from "../controllers/chatController.js";
const router = express.Router();

router.post("/chatRequestResponse", chatRequestResponse);
router.get("/getChatRequest/:chatRequestId", getChatRequest);
router.get("/getChatInfo/:chatId", getChatInfo);
router.post("/sendChatRequest", sendChatRequest);
router.post("/markMessagesAsRead", markMessagesAsRead);
router.get("/:firstId/:secondId", findChat);
router.get("/:userId", findChats);
router.post("/", createChat);

export default router;

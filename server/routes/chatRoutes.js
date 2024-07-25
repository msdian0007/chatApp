import express from "express";
import {
    chatRequestResponse,
  createChat,
  findChat,
  findChats,
  getChatRequest,
  sendChatRequest,
} from "../controllers/chatController.js";
const router = express.Router();

router.post("/chatRequestResponse", chatRequestResponse);
router.get("/getChatRequest/:chatRequestId", getChatRequest);
router.post("/sendChatRequest", sendChatRequest);
router.get("/:firstId/:secondId", findChat);
router.get("/:userId", findChats);
router.post("/", createChat);

export default router;

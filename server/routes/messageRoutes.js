import express from "express";
import { createMessage, getLatestMessage, getMessages } from "../controllers/messageController.js";
const router = express.Router();

router.get("/:chatId", getMessages);
router.post("/sendMessage", createMessage);
router.get("/latest/:chatId", getLatestMessage);

export default router;

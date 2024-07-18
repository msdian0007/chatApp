import express from "express";
import { createMessage, getLatestMessage, getMessages } from "../controllers/messageController.js";
const router = express.Router();

router.post("/", createMessage);
router.get("/:chatId", getMessages);
router.get("/latest/:chatId", getLatestMessage);

export default router;

import express from "express";
import { createChat, findChat, findChats } from "../controllers/chatController.js";
const router = express.Router();

router.post("/", createChat);
router.get("/:userId", findChats);
router.get("/:firstId/:secondId", findChat);    

export default router;

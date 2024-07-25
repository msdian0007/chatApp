import express from "express";
import {
  getAllFriends,
  getUser,
  getUserByPhoneNumber,
  getUsers,
  getUsersById,
  loginUser,
  registerUser,
} from "../controllers/userController.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/find", getUsers);
router.get("/find/:userId", getUser);
router.get("/findByNumber/:phoneNumber", getUserByPhoneNumber);
router.get("/getUsersById", getUsersById);
router.get("/getAllFriends/:userId", getAllFriends);

export default router;

import express from 'express'
import { getUser, getUsers, loginUser, registerUser } from '../controllers/userController.js'
const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/find", getUsers)
router.get("/find/:userId", getUser)

export default router
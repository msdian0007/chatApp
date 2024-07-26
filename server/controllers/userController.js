import userModal from "../Modals/userModal.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = async (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "1d" });
};

export const registerUser = async (req, res) => {
  try {
    const { firstName, lastName, phoneNumber, password } = req.body;
    if (!firstName || !lastName || !phoneNumber || !password)
      return res.status(400).json({ message: "All fields are Mandatory" });
    if (!validator.isMobilePhone(phoneNumber))
      return res.status(400).json({ message: "Invalid phone number" });
    if (!validator.isStrongPassword(password))
      return res.status(400).json({ message: "Passwords should be strong e.g.(Msdian@01)" });

    let user = await userModal.findOne({ phoneNumber });
    if (user)
      return res.status(400).json({ message: "User already registered" });

    user = new userModal({ firstName, lastName, phoneNumber, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();

    const token = await createToken(user._id);
    res.cookie("token", `Bearer ${token}`, {
      maxAge: 3600000,
      httpOnly: true,
      secure: true,
    });
    res.status(200).json({
      _id: user._id,
      firstName,
      lastName,
      phoneNumber,
      friends: user.friends,
      friendRequests: user.friendRequests,
      token: `Bearer ${token}`,
      message: "Congratulations, your account has been successfully created",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    const { phoneNumber, password } = req.body;
    if (!phoneNumber || !password)
      return res.status(400).json({ message: "All fields are Mandatory" });

    let user = await userModal.findOne({ phoneNumber });
    if (!user)
      return res.status(400).json({ message: "Invalid Number or password" });

    let validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).json({ message: "Invalid Number or password" });

    const token = await createToken(user._id);
    res.cookie("token", `Bearer ${token}`, {
      maxAge: 3600000,
      httpOnly: true,
      secure: true,
    });
    res.status(200).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber,
      friends: user.friends,
      friendRequests: user.friendRequests,
      token: `Bearer ${token}`,
      message: "You are successfully logged in",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUser = async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId) return res.status(200).json(null);
    const user = await userModal.findOne({ _id: userId });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const user = await userModal.find({});
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAllFriends = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await userModal.findOne({ _id: userId }, { friends: 1 });
    if (!user?.friends.length) return res.status(200).json([]);
    let objectString = user.friends.toString();
    let friendIds = objectString.split(",");
    const friends = await userModal.find({
      _id: { $in: friendIds },
    });
    res.status(200).json(friends);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUsersById = async (req, res) => {
  try {
    const { recipientId } = req.body;
    if (!Array.isArray(recipientId)) {
      return res
        .status(400)
        .json({ error: "Invalid input. Expected an array of IDs." });
    }
    const user = await userModal.find({ _id: { $in: recipientId } });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getUserByPhoneNumber = async (req, res) => {
  const { phoneNumber } = req.params;
  if (!phoneNumber) return res.status(200).json(null);
  const user = await userModal.find({ phoneNumber });
  res.status(200).json(user);
};

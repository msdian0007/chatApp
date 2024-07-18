import userModal from "../Modals/userModal.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = async (_id) => {
  return jwt.sign({ _id }, process.env.SECRET_KEY, { expiresIn: "1d" });
};

export const registerUser = async (req, res) => {
  try {
    
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.status(400).json({ message: "All fields are Mandatory" });
    if (!validator.isEmail(email))
      return res.status(400).json({ message: "Invalid Email Address" });
    if (!validator.isStrongPassword(password))
      return res.status(400).json({ message: "Password need to be Strong" });

    let user = await userModal.findOne({ email });
    if (user)
      return res.status(400).json({ message: "User already registered" });

    user = new userModal({ name, email, password });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user
      .save()
      .then(() => {})
      .catch((err) => {
        console.log(err);
      });

    const token = await createToken(user._id);
    res.cookie("token", `Bearer ${token}`, {
      maxAge: 3600000,
      httpOnly: true,
      secure: true,
    });
    res.status(200).json({
      _id: user._id,
      name,
      email,
      token: `Bearer ${token}`,
      message: "Successfully Registered",
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const loginUser = async (req, res) => {
  try {
    console.log("111111")
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({ message: "All fields are Mandatory" });

    let user = await userModal.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Invalid email or password" });

    let validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(400).json({ message: "Invalid email or password" });

    const token = await createToken(user._id);
    res.cookie("token", `Bearer ${token}`, {
      maxAge: 3600000,
      httpOnly: true,
      secure: true,
    });
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email,
      token: `Bearer ${token}`,
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

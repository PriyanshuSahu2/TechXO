import User from "../../models/User.mjs";
import bcryptjs from "bcryptjs";
export const register = async (req, res, next) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      mobileNumber,
      isAdmin = false,
    } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Password does not match" });
    }

    const userInDB = await User.findOne({ email: email });
    if (userInDB) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      mobileNumber,
      isAdmin,
    });

    await newUser.save();
    res.status(201).json({ message: "User signed up successfully" });
  } catch (error) {
    next(error);
  }
};

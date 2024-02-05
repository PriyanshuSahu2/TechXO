import User from "../../models/User.mjs";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
export const login = async (req, res, next) => {
  try {
    const { emailOrUserName, password } = req.body;
    const userInDB = await findUserByEmailOrUserName(emailOrUserName);

    if (!userInDB) {
      return res.status(401).json({ message: "Authentication failed" });
    }

    const isMatch = await bcryptjs.compare(password, userInDB.password);

    if (isMatch) {
      const accessToken = generateAccessToken(userInDB._id);
      const { password, ...userData } = userInDB._doc;
      return res
        .status(200)
        .json({ message: "Login successful", ...userData, accessToken });
    } else {
      return res.status(401).json({ message: "Authentication failed" });
    }
  } catch (err) {
    next(err);
  }
};

//find if user is using via email or mobile Number
async function findUserByEmailOrUserName(emailOrUserName) {
  return await User.findOne({
    $or: [{ email: emailOrUserName }, { userName: emailOrUserName }],
  });
}

function generateAccessToken(userId) {
  return jwt.sign(
    { id: userId },
    process.env.JWT_SECRET,
    { expiresIn: "7D" } // Set an appropriate expiration time
  );
}

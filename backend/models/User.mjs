import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    mobileNumber: { type: String, required: false, unique: true },
    password: { type: String, required: true },
    address: { type: mongoose.Schema.Types.ObjectId, ref: "Address" },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;

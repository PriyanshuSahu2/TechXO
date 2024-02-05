import mongoose from "mongoose";

const AddressSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    address: {
      Name: {
        type: String,
        required: true,
      },
      MobileNumber: {
        type: String,
        required: true,
      },
      PinCode: {
        type: String,
        required: true,
      },
      FullAddress: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", AddressSchema);
export default Address;

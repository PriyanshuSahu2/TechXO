import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: [
    {
      type: String,
      required: true,
    },
  ],
  categories: [
    {
      type: String,
      required: false,
    },
  ],
  color: [
    {
      type: String,
      required: false,
    },
  ],
  varient: [
    {
      size: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
    },
  ],
  reviews: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Reviews",
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  inStock: {
    type: Boolean,
    default: true,
  },
});

const Product = mongoose.model("Products", ProductSchema);
export default Product;

import Cart from "../../models/Cart.mjs";

export const getUserCart = async (req, res, next) => {
  try {
    const id = req.params.userId;
    const userCart = await Cart.findOne({ userId: id }).populate(
      "products.productId"
    );
    res.status(200).json(userCart);
  } catch (error) {
    next(error);
  }
};

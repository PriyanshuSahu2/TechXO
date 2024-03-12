import Cart from "../../models/Cart.mjs";

export const addProduct = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const products = req.body;
  
    const updatedCart = await Cart.findOneAndUpdate(
      { userId: userId },
      { $push: { products: products } },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (error) {
    next(error);
  }
};

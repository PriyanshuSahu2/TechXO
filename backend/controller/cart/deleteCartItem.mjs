import Cart from "../../models/Cart.mjs";

export const deleteCartItem = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const { itemIdx } = req.query;
    // Find the user's cart
    let cart = await Cart.findOne({ userId });

    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Check if the item index is valid
    if (itemIdx < 0 || itemIdx >= cart.products.length) {
      return res.status(400).json({ message: "Invalid item index" });
    }

    cart.products = cart.products.filter((_, index) => index != itemIdx);

    // Save the updated cart
    const updatedCart = await cart.save();
    console.log(updatedCart.products.length);
    // console.log(updatedCart);
    res.status(200).json(updatedCart);
  } catch (error) {
    next(error);
  }
};

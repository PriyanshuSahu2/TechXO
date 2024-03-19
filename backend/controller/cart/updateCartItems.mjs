import Cart from "../../models/Cart.mjs";

export const updateCartItem = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const { itemIdx, method } = req.query;
    console.log(method);
    // Find the user's cart
    let cart = await Cart.findOne({ userId });

    // Check if the cart exists
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    // Check if the item index is valid
    if (itemIdx < 0 || itemIdx >= cart.products.length) {
      return res.status(400).json({ message: "Invalid item index" });
    }

    // Update the variant and quantity of the item at the specified index

    if (method === "ADD") {
      cart.products[itemIdx].quantity++;
    } else {
      cart.products[itemIdx].quantity--;
    }

    // Save the updated cart
    const updatedCart = await cart.save();
    // console.log(updatedCart);
    res.status(200).json(updatedCart);
  } catch (error) {
    next(error);
  }
};

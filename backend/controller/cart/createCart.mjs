import Cart from "../../models/Cart.mjs";

export const createCart = async (req, res, next) => {
  try {
    const id = req.params.userId;
    const doesExist = await Cart.findOne({ userId: id });
    if (doesExist) {
      res.status(200).json({ message: "Cart Already Exist" });
    } else {
      const cart = await Cart.create({ userId: id });
      res.status(201).json({ message: "Cart Created Successfully" });
    }
  } catch (error) {
    next(error);
  }
};

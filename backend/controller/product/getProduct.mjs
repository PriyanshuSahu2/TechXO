import Product from "../../models/Product.mjs";

export const getProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

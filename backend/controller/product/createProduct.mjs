import Product from "../../models/Product.mjs";

export const createProduct = async (req, res, next) => {
  try {
    const newProduct = new Product(req.body);
    const product = await newProduct.save();
    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

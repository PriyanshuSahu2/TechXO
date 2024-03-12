import express from "express";

import { createError } from "../util/error.mjs";
import { getUserCart } from "../controller/cart/getUserCart.mjs";
import { addProduct } from "../controller/cart/updateCart.mjs";
import { createCart } from "../controller/cart/createCart.mjs";
import { verifyTokenAndAuth } from "../util/verifyToken.mjs";

const router = express.Router();

//getUserCartById
router.get("/:userId", getUserCart, createError);
router.post("/:userId", createCart, createError);
// router.post()
router.post("/:userId/add", verifyTokenAndAuth, addProduct, createError);

export default { router };

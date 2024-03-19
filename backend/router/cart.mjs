import express from "express";

import { createError } from "../util/error.mjs";
import { getUserCart } from "../controller/cart/getUserCart.mjs";
import { addProduct } from "../controller/cart/updateCart.mjs";
import { createCart } from "../controller/cart/createCart.mjs";
import { verifyTokenAndAuth } from "../util/verifyToken.mjs";
import { updateCartItem } from "../controller/cart/updateCartItems.mjs";
import { deleteCartItem } from "../controller/cart/deleteCartItem.mjs";

const router = express.Router();

//getUserCartById
router.get("/:userId", verifyTokenAndAuth, getUserCart, createError);
router.post("/:userId/create", verifyTokenAndAuth, createCart, createError);
// router.post()
router.post("/:userId/", verifyTokenAndAuth, addProduct, createError);
router.put("/:userId/", verifyTokenAndAuth, updateCartItem, createError);

router.delete("/:userId/", verifyTokenAndAuth, deleteCartItem, createError);

export default { router };

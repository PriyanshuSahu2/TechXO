import express from "express";
import { getProduct } from "../controller/product/getProduct.mjs";
import { createError } from "../util/error.mjs";
import { createProduct } from "../controller/product/createProduct.mjs";

const router = express.Router();

router.get("/", getProduct, createError);

router.post("/", createProduct, createError);

export default {router};

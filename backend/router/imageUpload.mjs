import express from "express";
import { uploadMiddleware } from "../util/uploadMiddleware.mjs";
import { createError } from "../util/error.mjs";

const router = express.Router();

router.post(
  "/images",
  uploadMiddleware().array("images"),
  (req, res, next) => {
    try {
      if (req.files && req.files.length > 0) {
        const fileNames = req.files.map((file) => file.path);
        res.json({ success: true, fileNames });
      } else {
        res.status(400).json({ success: false, error: "No files uploaded" });
      }
    } catch (error) {
      next(error);
    }
  },
  createError
);

export default {router};

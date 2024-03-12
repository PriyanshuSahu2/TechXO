import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

//imports routes
import authRouter from "./router/auth.mjs";
import productRouter from "./router/product.mjs";
import imageRouter from "./router/imageUpload.mjs";
import cartRouter from "./router/cart.mjs";
const app = express();
dotenv.config();
const PORT = 5000;

app.use(cors());
app.use(express.json());

//use Routes
app.use("/api/auth", authRouter.router);
app.use("/api/product", productRouter.router);
app.use("/api/upload", imageRouter.router);
app.use("/api/cart", cartRouter.router);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB Connected"))
  .catch((error) => console.log("Error on mongoose", error));

app.listen(PORT, () => {
  console.clear();
  console.log(`Server STARTED ON ${PORT}`);
});

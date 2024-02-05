import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
cloudinary.config({
  cloud_name: "dlqxokjjw",
  api_key: "787444973895616",
  api_secret: "EQrNAEdnOs7PR46JtKD0t7Ow9Qg",
});

export const uploadMiddleware = (path) => {
  const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: `images/products/${path}`,
      format: async (req, file) => "png", // supports promises as well
      allowedFormats: ["jpg", "jpeg", "png", "gif"],
      public_id: (req, file) => file.filename,
    },
  });
  return multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } });
};

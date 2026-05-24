import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME!,
  api_key: process.env.CLOUDINARY_KEY!,
  api_secret: process.env.CLOUDINARY_SECRET!,
});

export async function uploadImage(filePath: string) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "upload_images",
    });
    fs.unlinkSync(filePath); // Hapus file lokal setelah diupload
    return result.secure_url;
  } catch (error) {
    console.error("Error uploading image to Cloudinary:", error);
  }
}

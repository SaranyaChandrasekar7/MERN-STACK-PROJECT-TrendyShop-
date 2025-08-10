import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY,
  });
};


export const uploadImage = (filePath) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(filePath, (error, result) => {
      if (error) return reject(error);
      resolve(result.secure_url);
    });
  });
};

export default connectCloudinary;

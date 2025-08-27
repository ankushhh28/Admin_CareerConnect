import mongoose from "mongoose";

let isConnected = false;

export const connectDB = async () => {
  const MONGO_URL: string = process.env.MONGO_URL;
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(MONGO_URL);

    isConnected = true;
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
};

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 30000, // ⏱ wait longer to find primary
      socketTimeoutMS: 45000,          // ⏱ keep connection alive
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);

    // 🔁 CONNECTION EVENTS (VERY IMPORTANT FOR REAL APPS)

    mongoose.connection.on("disconnected", () => {
      console.log("⚠️ MongoDB disconnected");
    });

    mongoose.connection.on("reconnected", () => {
      console.log("🔄 MongoDB reconnected");
    });

    mongoose.connection.on("error", (err) => {
      console.log("❌ MongoDB error:", err.message);
    });

  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
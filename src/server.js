import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import { connectDB } from "./config/db.js";

const PORT = process.env.PORT || 5000;

// ✅ Debug logs (remove later)
console.log("KEY LOADED:", !!process.env.VAPI_API_KEY);
console.log("KEY PREFIX:", process.env.VAPI_API_KEY?.slice(0, 6));
console.log("ASSISTANT:", process.env.VAPI_ASSISTANT_ID);

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    patient_name: {
      type: String,
      required: true,
    },

    hospital_name: {
      type: String,
      default: "Pending",
    },

    doctor_name: {
      type: String,
      default: "Pending",
    },

    date: {
      type: String,
      default: "Pending",
    },

    time: {
      type: String,
      default: "Pending",
    },

    // ⭐ THIS IS THE MOST IMPORTANT FIELD (bridge with Vapi)
    callId: {
      type: String,
      required: true,
      index: true, // ⚡ fast lookup for webhook
    },

    status: {
      type: String,
      enum: ["CALLING", "CONFIRMED"],
      default: "CALLING",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Appointment", appointmentSchema);
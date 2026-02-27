import express from "express";
import {
  bookOpdAppointment,
  vapiWebhook,
  getAllAppointments,
  updateAppointmentStatus   // ✅ ADD THIS
} from "../controllers/appointment.controller.js";

const router = express.Router();

// 🎯 Trigger AI call
router.post("/book-opd", bookOpdAppointment);

// 🎯 Vapi webhook → saves to MongoDB
router.post("/vapi-webhook", vapiWebhook);

// 🎯 NEW → Fetch all appointments
router.get("/", getAllAppointments);
router.patch("/:id/status", updateAppointmentStatus);

export default router;
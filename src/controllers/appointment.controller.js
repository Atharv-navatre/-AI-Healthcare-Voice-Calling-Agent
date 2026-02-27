import { createOpdBooking } from "../services/appointment.service.js";
import Appointment from "../models/appointment.model.js";


// ✅ 1️⃣ Trigger AI call
export const bookOpdAppointment = async (req, res) => {
  try {
    const { name, age, symptoms, suspectedDisease, hospitalPhone } = req.body;

    if (!name || !age || !symptoms || !hospitalPhone) {
      return res.status(400).json({
        success: false,
        message: "Missing required patient details",
      });
    }

    // 🔹 Create real Vapi call
    const result = await createOpdBooking({
      name,
      age,
      symptoms,
      suspectedDisease,
      hospitalPhone,
    });

    // 🔹 Save CALLING state in DB
    const newAppointment = await Appointment.create({
      patient_name: name,
      hospital_name: "Pending",
      doctor_name: "Pending",
      date: "Pending",
      time: "Pending",
      status: "CALLING",
      callId: result.id, // ⭐ bridge between Vapi & DB
    });

    return res.status(200).json({
      success: true,
      message: "OPD booking call initiated",
      data: newAppointment,
    });

  } catch (error) {
    console.error("Controller Error:", error.message);
    return res.status(500).json({
      success: false,
      message: "Failed to book OPD appointment",
    });
  }
};



// ✅ 2️⃣ REAL Vapi Webhook
export const vapiWebhook = async (req, res) => {
  try {
    console.log("📩 VAPI WEBHOOK HIT");
    console.log(JSON.stringify(req.body, null, 2));

    // ✅ extract real Vapi fields
    const callId = req.body.call?.id;

    const structuredData =
      req.body.call?.analysis?.structuredData;

    if (!callId) {
      console.log("❌ No callId received");
      return res.sendStatus(200);
    }

    // 🔥 Update appointment
    const updatedAppointment = await Appointment.findOneAndUpdate(
      { callId: callId },
      {
        hospital_name: structuredData?.hospital_name || "Confirmed",
        doctor_name: structuredData?.doctor_name || "Assigned",
        date: structuredData?.date || "Scheduled",
        time: structuredData?.time || "Scheduled",
        status: "CONFIRMED",
      },
      { new: true }
    );

    console.log("✅ Updated Appointment:", updatedAppointment);

    res.sendStatus(200);

  } catch (error) {
    console.error("Webhook Error:", error);
    res.sendStatus(500);
  }
};



// ✅ 3️⃣ GET all appointments
export const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: appointments,
    });

  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch appointments",
    });
  }
};



// ✅ 4️⃣ Manual status update (optional admin feature)
export const updateAppointmentStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updated = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      success: true,
      data: updated,
    });

  } catch (error) {
    console.error("Status Update Error:", error);
    res.status(500).json({
      success: false,
      message: "Failed to update status",
    });
  }
};
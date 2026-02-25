import { createAppointment } from "../services/appointment.service.js";

export const bookAppointment = async (req, res) => {
  try {
    const data = req.body;

    const result = await createAppointment(data);

    res.json({
      success: true,
      message: "✅ Appointment booked successfully",
      data: result
    });

  } catch (error) {
    console.error("❌ Controller Error:", error);

    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};
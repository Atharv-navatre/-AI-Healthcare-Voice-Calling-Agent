export const createAppointment = async (data) => {

  const appointment = {
    id: Date.now(),
    patient_name: data.patient_name || "Unknown",
    symptom: data.symptom || "Not provided",
    createdAt: new Date()
  };

  console.log("📅 New Appointment:", appointment);

  return appointment;
};
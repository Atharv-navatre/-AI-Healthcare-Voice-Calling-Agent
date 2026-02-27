import { useEffect, useState } from "react";
import axios from "axios";

function Appointment({ refresh }) {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        setLoading(true);

        const res = await axios.get(
          "http://localhost:5000/api/appointments"
        );

        setAppointments(res.data.data);
      } catch (err) {
        console.error("Error fetching appointments", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [refresh]); // ⭐ reload when refresh changes

  return (
    <div style={{ marginTop: 40 }}>
      <h3>Appointments</h3>

      {loading && <p>Loading...</p>}

      {!loading && appointments.length === 0 && (
        <p>No appointments found</p>
      )}

      {!loading &&
        appointments.map((a) => (
          <div
            key={a._id}
            style={{
              border: "1px solid gray",
              padding: 10,
              marginBottom: 10,
            }}
          >
            <p><b>Patient:</b> {a.patient_name}</p>
            <p><b>Hospital:</b> {a.hospital_name}</p>
            <p><b>Doctor:</b> {a.doctor_name}</p>
            <p><b>Date:</b> {a.date}</p>
            <p><b>Time:</b> {a.time}</p>
            <p><b>Status:</b> {a.status}</p>
          </div>
        ))}
    </div>
  );
}

export default Appointment;
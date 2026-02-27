import { useState } from "react";
import axios from "axios";
import Appointment from "./components/Appointment";

function App() {
  const [form, setForm] = useState({
    name: "",
    age: "",
    symptoms: "",
    hospitalPhone: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [refresh, setRefresh] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setMessage("");

      // ✅ basic validation
      if (!form.name || !form.age || !form.symptoms || !form.hospitalPhone) {
        setMessage("❌ Please fill all fields");
        setLoading(false);
        return;
      }

      // ✅ convert to E.164 format (+91)
      const formattedPhone = form.hospitalPhone.startsWith("+91")
        ? form.hospitalPhone
        : `+91${form.hospitalPhone}`;

      const payload = {
        ...form,
        hospitalPhone: formattedPhone,
      };

      const res = await axios.post(
        "http://localhost:5000/api/appointments/book-opd",
        payload
      );

      setMessage("✅ " + res.data.message);

      // clear form
      setForm({
        name: "",
        age: "",
        symptoms: "",
        hospitalPhone: "",
      });

      // refresh appointment list
      setRefresh((prev) => !prev);

    } catch (err) {
      console.error(err);
      setMessage("❌ Backend not connected");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>OPD Booking</h2>

      <input
        name="name"
        placeholder="Patient Name"
        value={form.name}
        onChange={handleChange}
      />
      <br /><br />

      <input
        name="age"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
      />
      <br /><br />

      <input
        name="symptoms"
        placeholder="Symptoms"
        value={form.symptoms}
        onChange={handleChange}
      />
      <br /><br />

      <input
        name="hospitalPhone"
        placeholder="Hospital Phone (9876543210 or +919876543210)"
        value={form.hospitalPhone}
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Booking..." : "Book OPD"}
      </button>

      <p>{message}</p>

      <Appointment refresh={refresh} />
    </div>
  );
}

export default App;
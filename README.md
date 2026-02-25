# 🏥 AI Healthcare Voice Calling Agent

A real-time AI-powered healthcare voice assistant that handles patient phone calls, understands their concerns, and books appointments by triggering a live backend API.

This system demonstrates a **production-style low-latency architecture** using Vapi Realtime Voice AI, Twilio telephony, and a custom Node.js backend.

---

## 🚀 What We Built

This project enables a user to:

1. Call a real phone number ☎️
2. Talk to an AI healthcare assistant 🧠
3. Describe their health issue 🗣
4. Automatically book an appointment 📅
5. Store the booking through a backend API 🌐

All in **real time during a live phone conversation**.

---

## 🧠 Real-Time System ArchitectureUser Phone Call
↓
Twilio Voice
↓
Vapi Realtime AI Assistant
↓
Custom Tool (API Trigger)
↓
Node.js Backend (Express)
↓
Appointment Created


This direct flow ensures:

- ⚡ Ultra-low latency
- 🎙 Natural conversation
- 🧩 Full backend control
- 🏗 Production-ready design

---

## ✨ Core Features

- ☎️ Real-time AI phone call handling
- 🧠 Natural conversational symptom collection
- 📅 Automatic appointment booking
- ⚡ Direct AI → Backend tool execution
- 🔊 Interruptible human-like voice interaction
- 🌍 Public API exposure using ngrok (development)
- 🧩 Structured, scalable backend architecture

---

## 🛠 Tech Stack

### Voice & AI
- **Vapi** – Realtime Voice AI Agent
- **OpenAI Realtime Model** – Natural conversation
- **Twilio** – Phone call infrastructure

### Backend
- **Node.js**
- **Express.js**

### Development & Deployment
- **ngrok** – Public tunnel for local backend
- **GitHub** – Version control & collaboration

---

## 📂 Project Structure
healthcare-ai-voice-agent/
│
├── src/
│ ├── controllers/
│ │ appointment.controller.js
│ ├── routes/
│ │ appointment.routes.js
│ ├── services/
│ │ appointment.service.js
│ ├── app.js
│
├── server.js
├── package.json
├── .env
└── README.md


---

## ⚙️ Environment Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/healthcare-ai-voice-agent.git
cd healthcare-ai-voice-agent

2️⃣ Install dependencies
npm install
3️⃣ Create .env
PORT=5000
▶️ Run Locally
Start backend
npm run dev

Server runs on:

http://localhost:5000
Expose backend to internet (for Vapi tool)
npx ngrok http 5000

Copy the HTTPS URL and configure it in your Vapi tool:

https://YOUR-NGROK-URL/api/appointments/book
📡 API Endpoint
Book Appointment

POST

/api/appointments/book
Request
{
  "patient_name": "Atharv",
  "symptom": "fever"
}
Response
{
  "success": true,
  "message": "Appointment booked successfully",
  "data": {
    "id": "auto-generated",
    "patient_name": "Atharv",
    "symptom": "fever"
  }
}
☎️ Live Call Demo Flow

Call the Twilio number

AI greets the user

User says:

I want to book an appointment

AI asks:

Patient name

Symptom

Backend receives:

📅 New Appointment Booked
🧠 Why We Didn’t Use n8n in the Core Flow

This is a real-time voice interaction system, so:

Direct AI → Backend gives:

⚡ Faster response during live calls

🎯 Lower latency

🧠 More control over logic

n8n will be used in the next phase for:

📲 WhatsApp confirmations

📧 Email notifications

🗓 Google Calendar booking

📊 CRM / database sync

This follows real production architecture:

Realtime logic → Backend
Async automations → n8n
🔮 Future Enhancements

🗄 MongoDB patient database

📅 Appointment date & time selection

👨‍⚕ Doctor availability logic

📲 WhatsApp confirmation (n8n)

🌍 Multilingual voice (Hindi / Marathi)

📊 Admin dashboard

🧪 Demo Checklist

Before making a test call:

npm run dev
npx ngrok http 5000

Update ngrok URL in Vapi tool.

Then place the call.

👨‍💻 Author

Atharv Navatre
AI & Full Stack Developer
Hackathon Builder 🚀

🤝 Collaboration

Open to collaboration on:

AI Voice Agents

Healthcare Automation

Real-time AI systems

Feel free to fork, build, and improve.

⭐ Support

If you like this project:

Give it a ⭐ on GitHub and share it!

# 🏥 AI Healthcare Voice Calling Agent

A real-time AI-powered healthcare voice assistant that handles patient phone calls, understands their concerns, and books appointments by triggering a live backend API.

This system demonstrates a **production-style low-latency architecture** using **Vapi Realtime Voice AI, Twilio telephony, and a custom Node.js backend**.

---

## 🚀 What We Built

This project enables a user to:

- Call a real phone number ☎️  
- Talk to an AI healthcare assistant 🧠  
- Describe their health issue 🗣  
- Automatically book an appointment 📅  
- Store the booking through a backend API 🌐  

All in **real time during a live phone conversation**.

---

## ☎️ Live AI Phone Number

**Twilio Number:** `+1 (805) 552 5948`

You can place a real call and:

1. AI greets you  
2. You say: *"I want to book an appointment"*  
3. AI asks for:
   - Patient name
   - Symptom  
4. Backend API creates the appointment  

---

## 🧠 Real-Time System Architecture
# 🏥 AI Healthcare Voice Calling Agent

A real-time AI-powered healthcare voice assistant that handles patient phone calls, understands their concerns, and books appointments by triggering a live backend API.

This system demonstrates a **production-style low-latency architecture** using **Vapi Realtime Voice AI, Twilio telephony, and a custom Node.js backend**.

---

## 🚀 What We Built

This project enables a user to:

- Call a real phone number ☎️  
- Talk to an AI healthcare assistant 🧠  
- Describe their health issue 🗣  
- Automatically book an appointment 📅  
- Store the booking through a backend API 🌐  

All in **real time during a live phone conversation**.

---

## ☎️ Live AI Phone Number

**Twilio Number:** `+1 (805) 552 5948`

You can place a real call and:

1. AI greets you  
2. You say: *"I want to book an appointment"*  
3. AI asks for:
   - Patient name
   - Symptom  
4. Backend API creates the appointment  

---

## 🧠 Real-Time System Architecture
User Phone Call
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


### ✅ Why this architecture?

- ⚡ Ultra-low latency  
- 🎙 Natural human conversation  
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
- 🧩 Scalable backend architecture  

---

## 🛠 Tech Stack

### 🎙 Voice & AI
- **Vapi** – Realtime Voice AI Agent  
- **OpenAI Realtime Model** – Natural conversation  
- **Twilio** – Phone call infrastructure  

### ⚙ Backend
- Node.js  
- Express.js  

### 🧪 Development & Tools
- ngrok – Public tunnel for local backend  
- GitHub – Version control  

---

## 📂 Project Structure
healthcare-ai-voice-agent
│
├── src
│ ├── controllers
│ │ └── appointment.controller.js
│ ├── routes
│ │ └── appointment.routes.js
│ ├── services
│ │ └── appointment.service.js
│ ├── config
│ │ └── db.js
│ ├── utils
│ │ └── logger.js
│ ├── app.js
│ └── server.js
│
├── package.json
├── .env.example
└── README.md


---

## ⚙️ Environment Setup

### 1️⃣ Clone the repository
git clone https://github.com/Atharv-navatre/-AI-Healthcare-Voice-Calling-Agent.git

cd healthcare-ai-backend

### 2️⃣ Install dependencies
npm install


### 3️⃣ Create `.env`
PORT=5000


---

## ▶️ Run Locally

### Start backend
npm run dev

Server runs on:
http://localhost:5000


### Expose backend to internet (for Vapi tool)
npx ngrok http 5000

Use this in Vapi tool:
https://5101-103-247-7-16.ngrok-free.app


---

## 📡 API Endpoint

### Book Appointment

**POST** `/api/appointments/book`

#### Request

```json
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

📊 CRM/database sync

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

Before placing a test call:


npm run dev
npx ngrok http 5000


Update ngrok URL in Vapi tool → then call the Twilio number.

👨‍💻 Author

Atharv Navatre
AI & Full Stack Developer
Hackathon Builder 🚀

🤝 Collaboration

Open to collaboration on:

AI Voice Agents

Healthcare Automation

Real-time AI systems

⭐ Support

If you like this project:

Give it a ⭐ on GitHub and share it!

## 🎥 Live AI Call Demo

Watch a real conversation with the AI healthcare assistant:

[![Watch the demo](https://img.shields.io/badge/▶️-Watch%20Video-red?style=for-the-badge)](assets/demo-video.mp4)

---

## 🔊 Call Conversation Audio

Listen to a real booking interaction:

🎧 [Play / Download Audio](assets/demo-audio.aac)

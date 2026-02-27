# 🏥 AI Healthcare Voice Calling Agent

An AI-powered healthcare assistant that **calls hospitals and books OPD appointments automatically** using voice AI.

Built for hackathons ⚡ – Fullstack + Real-time AI voice + Telephony integration.

---

## 🚀 Live Flow

1. User fills patient details in frontend
2. Backend triggers Vapi voice call
3. AI talks with hospital receptionist
4. Appointment gets confirmed
5. MongoDB updates in real-time
6. Frontend shows confirmed booking

---

## 🧠 System Architecture

![Architecture](assets/demo-video.mp4)  
<!-- Replace with your architecture image if needed -->

---

## 🎙️ Voice AI Flow

![Voice AI](assets/demo-audio.aac)

---

## ✨ Features

- 📞 AI makes real phone calls to hospitals
- 🧠 Natural conversation using LLM
- 📅 Automatic OPD booking
- 🔄 Real-time status updates
- 🌐 Fullstack implementation
- ☁️ MongoDB Atlas database
- 🔗 Vapi tool calling integration
- 🌍 Public webhook via ngrok

---

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose

### AI & Voice
- Vapi AI
- OpenAI Realtime model

### Dev Tools
- ngrok
- GitHub

---

## 📂 Project Structure
AI-Healthcare-Voice-Calling-Agent
│
├── assets
│ ├── demo-audio.aac
│ └── demo-video.mp4
│
├── healthcare-frontend
│ ├── src
│ │ ├── components
│ │ ├── assets
│ │ ├── App.jsx
│ │ └── main.jsx
│ ├── index.html
│ └── package.json
│
├── src
│ ├── config
│ ├── controllers
│ ├── models
│ ├── routes
│ ├── services
│ ├── utils
│ ├── app.js
│ └── server.js
│
├── .env.example
└── package.json



---

## ⚙️ Environment Variables

### Backend `.env`

```
PORT=5000
MONGO_URI=your_mongodb_uri
VAPI_API_KEY=your_vapi_api_key
VAPI_ASSISTANT_ID=your_assistant_id
```

### Frontend `.env`

```
VITE_API_URL=http://localhost:5000
```

---

## 🧪 Run Locally

### 1️⃣ Clone repo

```bash
git clone https://github.com/YOUR_USERNAME/AI-Healthcare-Voice-Calling-Agent.git
cd AI-Healthcare-Voice-Calling-Agent

2️⃣ Backend setup
npm install
npm run dev
3️⃣ Start ngrok
ngrok http 5000

Copy forwarding URL → update in Vapi tool webhook

https://your-ngrok-url/api/appointments/vapi-webhook
4️⃣ Frontend setup
cd healthcare-frontend
npm install
npm run dev
🔗 API Endpoints
Book appointment
POST /api/appointments/book-opd
Vapi webhook
POST /api/appointments/vapi-webhook
Get all appointments
GET /api/appointments
🤖 Vapi Configuration
Tool → Server URL
https://your-ngrok-url/api/appointments/vapi-webhook
Assistant → Tool

Attach:

book_appointment
🎬 Demo
📹 Video

assets/demo-video.mp4

🔊 Call Recording

assets/demo-audio.aac

👨‍💻 Team Usage (Hackathon Ready)

Just run:

npm install
npm run dev
cd healthcare-frontend
npm install
npm run dev

Add .env → start ngrok → done ✅

![System Architecture](https://github.com/user-attachments/assets/773edfba-7d3a-4739-ad2a-c047c5ec5437)

🌍 Future Improvements

Multi-hospital support

Doctor availability prediction

WhatsApp/SMS confirmation

Deployment (Render / Vercel)

🏁 Hackathon Impact

This system reduces:

Manual hospital calls ☎️

Waiting time ⏳

Human dependency 🤝


![AI Voice Flow](https://github.com/user-attachments/assets/45740cb5-1650-4578-9dd9-ff07a40b58fb)

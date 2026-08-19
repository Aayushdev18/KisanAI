# 🌾 KisanAI - AI-Powered Digital Agronomist

**Empowering smallholder farmers with AI-driven agricultural insights, crop diagnosis, smart irrigation, and climate-adaptive planning.**

🔗 **Live Demo**: [Frontend](https://frontend-aayushdev18s-projects.vercel.app) | [Backend API](https://kisanai-slyz.onrender.com)

## 🎯 The Problem

Smallholder farmers — the backbone of global food security — face unprecedented challenges from climate change, water scarcity, and crop diseases. **Over 500 million smallholder farms** struggle with:
- 📉 **40% crop loss** due to preventable diseases and poor irrigation
- 💧 **60% water waste** from inefficient irrigation practices
- 🌡️ **Climate uncertainty** affecting traditional farming methods
- 📱 **Limited access** to actionable agricultural intelligence

## 🌍 The Solution

**KisanAI** is a web application that functions as an all-in-one digital toolkit for farmers. It synthesizes complex environmental data into simple, actionable advice tailored to a farmer's specific location.

Designed for extreme simplicity with a minimal-text, icon-driven interface and multi-language support for maximum accessibility.

## ✨ Features

### 🩺 AI Crop Doctor
- AI-powered plant disease detection and health assessment
- Upload a photo of a sick plant for instant analysis using the OpenEPI Crop Health API
- Threat-level assessment with accessible treatment steps
- Complete diagnosis history with progress monitoring

### 💧 Smart Irrigation Advisor
- Daily watering advice using real-time weather data and soil properties
- Moisture monitoring and soil health assessments
- Smart irrigation scheduling based on crop needs and weather forecasts

### 📅 Climate-Smart Planner
- Analyzes soil type and historical weather patterns to recommend the best crops
- Risk assessment with pros, cons, and optimal planting windows
- Price trends and demand forecasting

### 🌍 Farm Management
- GeoJSON-based farm boundary mapping
- Multi-language support (English, Hindi, Spanish, French, German)
- PWA with offline sync for rural connectivity
- Analytics dashboard with daily actionable insights

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|-------------|
| **Frontend** | React, Tailwind CSS, Framer Motion, React Leaflet, Vite |
| **Backend** | Node.js, Express.js, MongoDB, Mongoose, JWT |
| **APIs** | OpenEPI (weather, soil, crop health) |
| **Deployment** | Vercel (frontend), Render (backend), MongoDB Atlas |

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- MongoDB 5.0+

### Installation

```bash
git clone https://github.com/Aayushdev18/KisanAI.git
cd KisanAI

# Backend
cd backend
npm install
cp env.example .env
# Edit .env with your configuration
npm run dev

# Frontend (new terminal)
cd frontend
npm install
npm run dev
```

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:5000`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Ayush Dev** - [GitHub](https://github.com/Aayushdev18) | [LinkedIn](https://www.linkedin.com/in/ayush-dev-a255a5289)

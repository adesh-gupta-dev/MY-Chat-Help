# 💬 MyChatApp

An AI-powered chat application built with **React** on the frontend and **Node.js + Express** on the backend, integrated with **OpenAI API** for real-time responses.

---

## 🚀 Features

- 🧠 Chat with an AI assistant using OpenAI GPT-4 API
- 💬 Beautiful, mobile-responsive UI
- 🌙 Theme-ready with CSS variables
- 📲 WhatsApp-style chat layout
- 🧼 Clear chat functionality
- 🔒 Backend powered by Express + MongoDB (optional for storing messages)

---

## 🖼️ UI Preview

![Chat App Screenshot](./screenshot.png) <!-- Replace with your screenshot filename -->

---

## 🛠️ Tech Stack

| Frontend            | Backend              |
|---------------------|----------------------|
| React + CSS Modules | Node.js + Express    |
| React Router        | MongoDB + Mongoose (optional) |
| Lucide Icons        | OpenAI SDK           |
| Fetch / Axios       | dotenv + cors        |

---

## 📁 Project Structure

my-chat-app/ ├── client/ 
            ├── README.md
# React Frontend │
                 └── src/ 
                 ├── components/ 
                 ├── App.js 
                 └── index.js 
                r
 # Node.js Backend │ 
                ├── server.js │ 
                └── .env 
                └── index.js │    
                ├── models/ │ 
                ├── routes/ │
                ├── index.js │ 
                
---

## 🧑‍💻 Getting Started

### ✅ Prerequisites

- Node.js & npm
- OpenAI API key
- (Optional) MongoDB for message storage

### 📦 Installation

```bash
git clone https://github.com/your-username/my-chat-app.git
cd my-chat-app
```
Install Frontend
```bash
cd client
npm install
npm start
```
Install Backend
```bash
cd ../server
npm install
npm run dev
```
Make sure to create a .env file in the server/ directory:
```.env
PORT=5000
OPENAI_API_KEY=your_openai_key_here
MONGO_URI=your_mongodb_uri_here
```
📄 License
MIT © 2025 Adesh Gupta
```License

---

Let me know if you'd like to:

- Auto-generate screenshots
- Add badges (build status, version, etc.)
- Convert this to a Notion or PDF format

I can also drop this into your project as a real file if you're using VS Code or want it zipped!

```

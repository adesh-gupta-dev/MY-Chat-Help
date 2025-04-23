// index.js - main backend entry point

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();  // loads environment variables from .env

// Import the routes
const chatRoutes = require('./routes/chatRoutes');
const openaiRoutes = require('./routes/openaiRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Register routes
app.use('/api/chats', chatRoutes);     // Chat messages endpoints
app.use('/api/openai', openaiRoutes);    // OpenAI chat endpoints

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('Error connecting to MongoDB:', err));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

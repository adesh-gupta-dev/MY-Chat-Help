// routes/openaiRoutes.js

const express = require('express');
const OpenAI = require('openai');
require('dotenv').config();

const router = express.Router();

// Initialize OpenAI with the API key from environment variables
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// POST /api/openai/chat
// This endpoint accepts a chat prompt and returns an AI-generated response.
router.post('/chat', async (req, res) => {
  try {
    // Expect the client to send an array of messages in the "messages" field of the request body
    const { messages } = req.body;

    // Call OpenAI chat completions endpoint
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",  // Change to your preferred model if needed
      store: true,
      messages: messages,
    });

    // Return the first choice's message as JSON
    res.json(completion.choices[0].message);
  } catch (error) {
    console.error("OpenAI API Error:", error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

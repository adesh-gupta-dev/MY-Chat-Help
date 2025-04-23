// routes/chatRoutes.js

const express = require('express');
const Message = require('../models/message');

const router = express.Router();

// GET all messages for a specific chat (using chatId)
router.get('/:chatId', async (req, res) => {
  try {
    const messages = await Message.find({ chatId: req.params.chatId });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new message
router.post('/', async (req, res) => {
  const { sender, text, chatId } = req.body;
  try {
    const newMessage = new Message({ sender, text, chatId });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;

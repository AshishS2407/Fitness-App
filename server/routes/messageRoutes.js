const express = require('express');
const router = express.Router();
const verifyToken = require("../middleware/authMiddleware");
const Message = require('../models/message'); // Import the Message model

// Route to handle message submission
router.post('/api/messages', async (req, res) => {
  try {
    const { email, mobileNumber, message } = req.body;
    const newMessage = new Message({ email, mobileNumber, message });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to get all messages (for admin)
router.get('/api/messages',async (req, res) => {
  try {
    const messages = await Message.find();
    res.json(messages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// In-memory storage for messages
let messages = [];

// Route to get all messages
app.get('/messages', (req, res) => {
    res.json(messages);
});

// Route to send a message
app.post('/messages', (req, res) => {
    const { text, sender } = req.body;
    const newMessage = { text, sender };
    messages.push(newMessage);
    res.status(201).json(newMessage);
});

// Start the server
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

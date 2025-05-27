const express = require('express');
const http = require('http');
const path = require('path');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

wss.on('connection', ws => {
  console.log('Client connected');

  ws.on('message', message => {
    console.log(`Received: ${message}`);
    ws.send(`Server received: ${message}`);
  });

  ws.on('close', () => console.log('Client disconnected'));
  ws.on('error', error => console.error(`Error: ${error}`));
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`HTTP/WebSocket server running at http://localhost:${PORT}`);
});
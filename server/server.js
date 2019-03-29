const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const app = express();
// manually creating http server
const server = http.createServer(app);
// get access to socket io by passing in our http server into socketIO
const io = socketIO(server);

// create default port or get from env variable
const port = process.env.PORT || 3005;

const publicPath = path.join(__dirname, '../public');
console.log(publicPath);

app.use(express.static(publicPath));

// use built-in event listener on socketio to listen to incoming connections
io.on('connection', (socket) => {
  console.log('client connected');
  socket.on('disconnect', () => {
    console.log('client disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server started on ${port}`);
});

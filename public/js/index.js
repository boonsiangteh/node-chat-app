var socket = io();
// use socketio built in event listener connect to listen to connections to server
socket.on('connect', function () {
  console.log('connected to server');

  // create emit event in connect to ensure event is only emmitted after we connect to server
  socket.emit('createMessage', {
    to: 'iron man',
    text:'iron man rocks'
  });
});

socket.on('disconnect', function () {
  console.log('disconnected from server');
});


socket.on('newMessage', function (newEmail) {
  console.log('new message received', newEmail);
});

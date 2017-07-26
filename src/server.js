
var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat', function(msg){
    console.log('got a message');
    io.emit('chat', msg);
  });
});

server.listen(8000, function(){
  console.log('listening on *:8000');
});


var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

app.get('/', function(req, res){
  res.sendFile(__dirname + '../public/index.html');
});

io.on('connection', function(socket){
  socket.on('chat', function(msg){
    console.log('got a message');
    io.emit('chat', msg);
  });
});

server.listen(3000, function(){
  console.log('listening on *:3000');
});

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);
var path = require('path');

var port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname,"client/build")));

io.on('connection', function(socket){
  socket.on('chat', function(msg){
    console.log('got a message '+ new Date());
    io.emit('chat', msg);
  });
});

server.listen(port, function(){
  console.log('listening on '+port);
});


var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io').listen(server);

var port = process.env.PORT || 8000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat', function(msg){
    console.log('got a message '+ new Date());
    io.emit('chat', msg);
  });
});

server.listen(port, function(){
  console.log('listening on '+port);
});

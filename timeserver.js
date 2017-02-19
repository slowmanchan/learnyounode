var net = require('net');
var strftime = require('strftime');
var dateString = strftime('%Y-%m-%d %H:%M');

var server = net.createServer(function(socket) {
  socket.end(dateString+'\n');
})
server.listen(process.argv[2]);

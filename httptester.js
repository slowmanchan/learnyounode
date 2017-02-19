var http = require('http');

http.get("http://www.redflagdeals.com", function(res) {
  console.log(res.statusCode);
}).on('error', function(e) {
  console.log(e);
})

var bl = require('bl');
var http = require('http');

http.get(process.argv[2], function(res) {
  res.pipe(bl(function(err, data) {
    if (err) {
      return console.error(err);
    }
    data = data.toString();
    console.log(data.length);
    console.log(data);
  }))
})

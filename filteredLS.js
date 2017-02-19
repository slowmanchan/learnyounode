var fs = require('fs');
var path = require('path');
var dirPath = process.argv[2];
var fileFilter = '.'+process.argv[3];
//fs.readdir()
fs.readdir(dirPath, function(err, list){
  if (err){
    console.log(err);
  }
  // iterate over list and compare file ext with filter ext
  list.forEach(function(file) {
    if (path.extname(file) === fileFilter) {
      console.log(file);
    }
  })
})

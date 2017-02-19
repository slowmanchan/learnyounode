var fs = require('fs');
var path = require('path');

module.exports = function(dirPath, fileFilter, callback){
  fs.readdir(dirPath, function(err, list){
    if (err){
      return callback(err);
    }
    // iterate over list and compare file ext with filter ext
    list.forEach(function(file) {
      if (path.extname(file) === fileFilter) {
        return callback(file);
      }
    })
  })
}

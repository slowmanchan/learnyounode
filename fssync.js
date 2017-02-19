// import filesync module
var fs = require('fs');
// read file into node buffer
// pass utf8 to have buffer coerced into string
var buffer = fs.readFileSync(process.argv[2], 'utf8');
// call split with a newline delemiter
var readLines = buffer.split('\n');
// return an array of strings
console.log(readLines);

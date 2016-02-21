var fs = require('fs');
// fs.readFile is async, fs.readFileSync is synchronous (prev example)
// the second argument is a callback function, which takes 2 arguments, an error object
// and the actual object returned by the caller function after it is done executing.
var buffer = fs.readFile(process.argv[2], function (err, buf) {
    if (err) throw err;
    var newLineCount = buf.toString().split('\n').length - 1;
    console.log(newLineCount);
});
var fs = require('fs');
var buffer = fs.readFileSync(process.argv[2]);
// buffer is an object, cast it to a string using .toString() method
// documentation for buffer object is here: file:///usr/local/lib/node_modules/learnyounode/node_apidoc/buffer.html
// buffer streams are necessary due to stream input type being possibly binary/octal/hexadecimal/text/unicode etc.
// need explicit encoding methods to convert them to strings.

// buffer.toString('utf8', 0, buffer.length)
var str = buffer.toString();


var newLineCount = str.split('\n').length - 1;

console.log(newLineCount);
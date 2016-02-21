
var http = require('http');
const BufferList = require('bl')
var bl = new BufferList();

http.get(process.argv[2], function (response) {
    // response objects have 3 methods (on, data, end)
    response.setEncoding('utf8');
    response.on('data', function (data) {
        bl.append(data);
    });
    response.on('end', function () {
        console.log(bl.length);
        console.log(bl.toString());
    });
})
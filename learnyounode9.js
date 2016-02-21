
var http = require('http');
const BufferList = require('bl')

var callbackCounter = 0;
var bl1 = new BufferList(); bl2 = new BufferList(); bl3 = new BufferList();

readUrls();

function readUrls () {
    http.get(process.argv[2], function (response) {
        // response objects have 3 methods (on, data, end)
        response.setEncoding('utf8');
        response.on('data', function (data) {
            bl1.append(data);
        });
        response.on('end', function () {
            callbackCounter += 1;
            if (callbackCounter === 3) {
                console.log(bl1.toString());
                console.log(bl2.toString());
                console.log(bl3.toString());
            }
        });
    })

    http.get(process.argv[3], function (response) {
        // response objects have 3 methods (on, data, end)
        response.setEncoding('utf8');
        response.on('data', function (data) {
            bl2.append(data);
        });
        response.on('end', function () {
            callbackCounter += 1;
            if (callbackCounter === 3) {
                console.log(bl1.toString());
                console.log(bl2.toString());
                console.log(bl3.toString());
            }
        });
    })

    http.get(process.argv[4], function (response) {
        // response objects have 3 methods (on, data, end)
        response.setEncoding('utf8');
        response.on('data', function (data) {
            bl3.append(data);
        });
        response.on('end', function () {
            callbackCounter += 1;
            if (callbackCounter === 3) {
                console.log(bl1.toString());
                console.log(bl2.toString());
                console.log(bl3.toString());
            }
        });
    })
}
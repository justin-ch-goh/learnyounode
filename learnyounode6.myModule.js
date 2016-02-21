module.exports = function (dir, ext, callback) {
    var fs = require('fs');
    var files = [];
    fs.readdir(dir, function (err, list){
        if (err) {
            return callback(err);
        }
        for (i = 0; i < list.length; i++) {
            if (list[i].indexOf("." + ext) > -1) {
                files.push(list[i]);
            }
        }
        return callback(null,files);
    });
}

// callback in a callback -> readdir has a callback function which must give different things
// depending on whether the readdir succeeds or fails
// if the readdir fails, the ENTIRE function will return the callback function which is in the format expected
// by program.js (since... we defined this module's spec, program.js has to give a callback as the third arg)
// that function will then throw the error if it is there, else, since it will proceed to loop if first
// arg is null, for this module we have to return callback(null, files) to let it process the files array.
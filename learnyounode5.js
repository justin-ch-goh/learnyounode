var fs = require('fs');
var file = process.argv[2];
var ext = "." + process.argv[3];
var files = [];

fs.readdir(file, function (err, list){
    for (i = 0; i < list.length; i++) {
        if (list[i].indexOf(ext) > -1) {
            files.push(list[i]);
        }
    }
    for (i = 0; i < files.length; i++) {
        console.log(files[i]);
    }
});
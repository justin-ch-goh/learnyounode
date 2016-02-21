var myModule = require('./myModule.js');

var files = myModule(process.argv[2], process.argv[3], function(err,list) {
    if (err) throw err;
    for (i = 0; i < list.length; i++) {
        console.log(list[i]);
    }
});
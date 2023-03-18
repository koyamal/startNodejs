const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'sample.txt'), 'utf-8', function(err, data){
    if(err){
        console.log(err.message);
        return
    }
    console.log(data);
});
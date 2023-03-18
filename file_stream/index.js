const path = require('path');
const fs = require('fs');

let data = "";
const reader = fs.createReadStream(path.join(__dirname, 'sample.txt'), 'utf-8');
reader.on("data", (chunk) => {
    data += chunk;
    // console.log("hello");
    // console.log(chunk);
});
reader.on("end", () =>{
    console.log(data);
});

reader.resume();
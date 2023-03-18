const path = require('path');
const fs = require('fs');

const reader = fs.createReadStream(path.join(__dirname, 'sample.txt'), 'utf-8');
const writer = fs.createWriteStream(path.join(__dirname, 'sample-cp.txt'), 'utf-8');

reader.pipe(writer);
reader.resume();

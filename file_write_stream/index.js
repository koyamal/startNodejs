const path = require('path');
const fs = require('fs');

const writer = fs.createWriteStream(path.join(__dirname, 'create.txt'), 'utf-8');
writer.end("Hello World !");

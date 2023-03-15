const path = require('path');

const filepath = '/Users/mike/work/temp/index.js';

console.log('dirname: ', path.dirname(filepath));
console.log('basename: ', path.basename(filepath));
console.log('extname: ', path.extname(filepath));


const filepath2 = path.join('/Users/mike','temp/index.js');
console.log('join: ', filepath2);
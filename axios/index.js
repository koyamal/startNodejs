const axios = require('axios');
const fs = require('fs');
const util = require('util');
const path = require('path');

const writeFile = util.promisify(fs.writeFile);

const useAxios = async function(){
    const data = await axios('https://google.com');
    console.log(data.data);
    await writeFile(path.join(__dirname,'sample.html'), data.data, 'utf-8');
}

useAxios();
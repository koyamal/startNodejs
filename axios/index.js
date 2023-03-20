const axios = require('axios');
const fs = require('fs');
const util = require('util');
const path = require('path');
const fetch = require('node-fetch');

const writeFile = util.promisify(fs.writeFile);

const useAxios = async function(){
    const data = await axios('https://google.com');
    // console.log(data.data);
    await writeFile(path.join(__dirname,'sample.html'), data.data, 'utf-8');

    return 'OK';
}
// console.log(fetch);
const useFetch = async function(){
    console.log('This is useFetch');
    const data = await fetch("https://google.com");
    console.log(data);
}

useFetch();

useAxios().then((val)=>{
    console.log(val);
    return val;
}).then((val) => {
    console.log(val);
    throw new Error("This is Error");
}).catch((err) => {
    console.log(err);
});
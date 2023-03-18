const fs = require('fs');
const path = require('path');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

const fn = async function(){
    try{
        const data = await readFile(path.join(__dirname, 'sample.txt'), 'utf-8');
        await writeFile(path.join(__dirname, 'sample-cp02.txt'), data, 'utf-8');
        console.log('OK');
    }catch(err){
        console.log(err.message);
    }
}

fn();

// readFile(path.join(__dirname, 'sample.txt'), 'utf-8')
// .then((data) =>{
//     return writeFile(path.join(__dirname, 'sample-cp.txt'), data, 'utf-8');
// }).then(()=>{
//     console.log('OK');
// }).catch((err) =>{
//     console.log(err.message);
// })

// fs.readFile(path.join(__dirname, 'sample.txt'), 'utf-8', function(err, data){
//     if(err){
//         console.log(err.message);
//         return
//     }
//     // console.log(data);

//     fs.writeFile(path.join(__dirname, 'sample-copy.txt'), data, 'utf-8', function(err, data){
//         if(err){
//             console.log(err.message);
//             return
//         }
//         console.log('OK');
//     })
// });
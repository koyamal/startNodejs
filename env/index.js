// console.log(JSON.stringify(process.env, null, 2));

for(arg of process.argv){
    console.log(arg);
}

console.log(`process.cwd(): ${process.cwd()}`);
console.log(`__dirname: ${__dirname}`);

console.log(process.platform);
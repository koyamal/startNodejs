const fs = require("fs");

function moreWork(){
    console.log('moreWork is called');
}

// const data = fs.readFileSync("./sample.txt");
// console.log(data);
// moreWork();

fs.readFile("./sample.txt", (err, data) => {
  if (err) throw err;
  console.log(data);
});
moreWork();
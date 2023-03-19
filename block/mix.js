// const fs = require("fs");
// fs.readFile("./sample.txt", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });
// fs.unlinkSync("./sample.txt");
// console.log('fin');

const fs = require("fs");
fs.readFile("./sample.txt", (readFileErr, data) => {
  if (readFileErr) throw readFileErr;
  console.log(data);
  fs.unlink("./sample.txt", (unlinkErr) => {
    if (unlinkErr) throw unlinkErr;
  });
});
const {echo, area} = require('./methods');
const Lamborgini = require('./lamborgini');
const config = require('./config');

echo("This is echo");
console.log(area(10, 2));

const car = new Lamborgini('Lambor');

car.echo();
car.drive();

console.log(config);

console.log('===================================');
console.log('                  ');
const a = require("./lib/module-a/index.js");
const b = require("./lib/module-b/index");
a();
b();
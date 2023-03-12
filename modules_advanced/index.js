const {echo, area} = require('./methods');
const Lamborgini = require('./lamborgini');

echo("This is echo");
console.log(area(10, 2));

const car = new Lamborgini('Lambor');

car.echo();
car.drive();
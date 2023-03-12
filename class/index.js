class Car {
    constructor(name){
        this.name = name;
    }

    drive(){
        console.log('zoom zoom ...');
    }
}

class Lamborghini extends Car {
    constructor(name){
        super(name);
    }

    echo(){
        super.drive();
    }

    drive(){
        console.log(`fire ${this.name}`);
    }
}

const car = new Lamborghini('lambor');
car.echo();
car.drive();
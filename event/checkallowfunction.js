const person = {
    name: 'Tom',
    hello: function(){
        console.log('Hello ' + this.name);
    }
}

// person.hello();

const person2 = {
    name: 'Tom',
    hello: () => {
        console.log('Hello ' + this.name);
    }
}

// person2.hello();

const a = () => {
    console.log('A is called ', this.name);
}

const person3 = {
    name: 'Tom',
    hello: function(){
        console.log('Hello ' + this.name);
        a();
        const b = () => {
            console.log('B is called ', this.name);
        };
        b();
    }
}

person3.hello();

function c() {
    const d = () => console.log('D: ', this.name);
    const e = function(){
        console.log('E: ', this.name);
    }

    d();
    e();
}

c();
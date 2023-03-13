const person = {
    name: 'Tom',
    hello: function(){
        console.log('Hello ' + this.name);
    }
}

person.hello();

const person2 = {
    name: 'Tom',
    hello: () => {
        console.log('Hello ' + this.name);
    }
}

person2.hello();
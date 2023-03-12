const Clock = require('./clock');

const clock = new Clock();
let i = 0;
clock.on("tick", function(){
    console.log(++i);
    if(i > 3){
        clock.stop();
    }
});

// console.log(clock.emit('tick'));
clock.start();
// clock.test();
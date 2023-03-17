const Clock = require('./clock');

const clock = new Clock();
let i = 0;
clock.on("tick", function(){
    console.log(++i);
    if(i >= 4){
        clock.stop();
    }
});

clock.start();
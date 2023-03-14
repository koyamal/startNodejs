const EventEmitter = require('events');

class Clock extends EventEmitter{
    constructor(){
        super();
        // console.log(this.emit);
        this.interval = 2000;
        this.timer = null;
    }
    start(){
        if(this.timer){
            this.stop();
        }
        this.timer = global.setInterval(() => {
            // console.log(this);
            this.emit("tick");
        }, this.interval);
        // this.timer = global.setInterval(function() {
        //     console.log(this);
        //     //this.emit("tick");
        // }, this.interval);
    }
    stop(){
        if(!this.timer){
            return;
        }
        global.clearInterval(this.timer);
        this.timer = null;
    }
};

module.exports = Clock;
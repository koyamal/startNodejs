const EventEmitter = require('events');

const ee = new EventEmitter();

const ontick = function(){
    console.log('test');
};

ee.on('event', ontick);

ee.emit('event');
ee.emit('event');
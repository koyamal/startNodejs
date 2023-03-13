const EventEmitter = require('events');

const ee = new EventEmitter();

const ontick = function(){
    console.log('event is called');
    ee.off('event', ontick);
};

ee.on('event', ontick);

ee.emit('event');
ee.emit('event');
const EventEmitter = require('events');

const ee = new EventEmitter();

// const ontick = function(){
//     console.log('event is called');
//     // ee.off('event', ontick);
// };

// ee.on('event', ontick);
// ee.once('event', ontick);

ee.on('event', function(){
    console.log("function: ", this);
});

ee.on('event', () => {
    console.log("arrow: ", this);
});

ee.emit('event');
ee.emit('event');
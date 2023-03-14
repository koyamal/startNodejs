const { EventEmitter } = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on('box', () => {
  console.log('listener 0');
  console.log('Sum of this listener is ' + eventEmitter.listenerCount('box'));
});;

const listenerMessage1 = () => console.log('This is listener1');
const listenerMessage2 = () => console.log('This is listener2');

eventEmitter.on('addItem1', () => {
  console.log('add listener1');
  eventEmitter.addListener('box', listenerMessage1);
});

eventEmitter.on('addItem2', () => {
  console.log('add listener2');
  eventEmitter.addListener('box', listenerMessage2);
});

eventEmitter.on('removeItem', () => {
  console.log('remove listener');
  eventEmitter.removeListener('box', listenerMessage1);
});

eventEmitter.on('addItem1', () => {
  console.log('add listener1');
  eventEmitter.addListener('box', listenerMessage1);
});

eventEmitter.emit('addItem1');
eventEmitter.emit('addItem2');
eventEmitter.emit('removeItem');
eventEmitter.emit('box');
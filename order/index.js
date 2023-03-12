setTimeout(function(){
    console.log('setTimeout');
}, 0);

setImmediate(function(){
    console.log('setImmediate');
})

process.nextTick(function(){
    console.log('nextTick');
})

Promise.resolve().then(function(){
    console.log('Promise');
})
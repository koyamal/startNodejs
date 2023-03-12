setTimeout(function(){
    console.log("setTimeout is called");
}, 1000);

console.log('global is called');

let end = (new Date()).getTime() + 3000;
while((new Date().getTime() < end)){}
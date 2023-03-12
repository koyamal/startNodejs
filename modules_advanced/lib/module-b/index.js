const a = require('../module-a/index');

module.exports = function(){
    a();
    console.log('module-b is called');
}
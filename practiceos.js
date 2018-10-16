
const os = require('os');  //module is being loaded by using require it is being called

var totalMemory = os.totalmem();   //method stores value in variable type totalMemory
var freeMemory = os.freemem();

//console.log('Total memory: ' + totalMemory);
//console.log('free memory: ' + freeMemory);

console.log(`Total Memory: ${totalMemory}`);
console.log(`Free Memory: ${freeMemory}`);
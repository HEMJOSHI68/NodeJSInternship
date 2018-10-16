
const EventEmitter = require('events'); // requires events will load event module
//const emitter = new EventEmitter();     //  here EventEmitter is a class and emitter is an obect 
// logger.js and practiceeventarg.js both are related to each other using extend and exports
var url= 'http://mylogger.io/log';

class Logger extends EventEmitter  // Here extends will provide all functionalities of EventEmitter
{  
    log(message)  // no need to give function as a name/keyword inside a class, we call it as method in that class
    {
        //send http request 
        console.log(message);
        //Raise and event
    this.emit('messageLogged',{id : 1 ,url : 'http://'});  // here this reference logger class itself
        
    }
  
}
module.exports = Logger;

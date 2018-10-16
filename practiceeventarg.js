// logger.js and practiceeventarg.js both are related to each other using extend and exports


const EventEmitter = require('events'); // requires events will load event module
//const emitter = new EventEmitter();     //  here EventEmitter is a class and emitter is an obect

const Logger = require('./logger');
const logger = new Logger(); 

//Register a listner 
logger.on('messageLogged' , function(args){
    console.log('listner called', args);
})

logger.log('message');

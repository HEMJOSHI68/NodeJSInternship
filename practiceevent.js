
const EventEmitter = require('events'); // requires events will load event module
const emitter = new EventEmitter();     //  here EventEmitter is a class and emitter is an obect

//Register a listner 
emitter.on('messageLogged' , function(){


    console.log('listner called');
})


//Raise and event
emitter.emit('messageLogged');
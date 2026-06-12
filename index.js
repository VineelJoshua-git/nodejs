const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('welcome', (name) => {
    console.log(`Welcome ${name}`);
});

emitter.emit('welcome', 'Vineel');
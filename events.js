emitter.on('login', () => {
    console.log('Listener 1');
});

emitter.on('login', () => {
    console.log('Listener 2');
});

emitter.emit('login');
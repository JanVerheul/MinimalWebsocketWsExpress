const WebSocket = require('ws');
const ws = new WebSocket('ws://localhost:6060/socket');
ws.on('open', function open() {
    console.log('Connection Opened ');
    let counter = 0
    setInterval(() => {
        counter += 1;
        ws.send('Client generated message #' + counter);
    }, 1370);
});
ws.on('message', function incoming(data) {
    console.log('Message received from server: ', data);
});


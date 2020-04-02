const server = require('http').createServer();
const os = require('os-utils');

const io = require('socket.io')(server, {
    transports: ['websocket', 'polling']
});



// 1. listen for socket connections
io.on('connection', client => {
    setInterval(() => {
        // 2. every second, emit a 'cpu' event to user
        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        os.cpuUsage((cpuPercent) => {
          client.emit('cpu', {
              name: time,
              value: cpuPercent
        });
    }, 1000);
});
});

server.listen(3000);
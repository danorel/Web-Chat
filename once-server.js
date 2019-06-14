const net = require('net');
const server = net.createServer(socket => {
    socket.once('data', data => {
        socket.write(data);
    })
}).listen(8888);
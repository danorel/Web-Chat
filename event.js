const events = require('events');
const net = require('net');
const chanel = new events.EventEmitter();
chanel.clients = {};
chanel.subscriptions = {};
chanel.on('join', function(id, client){
    const welcome = `
    Welcome!\nGuests online: ${this.listeners('broadcast').length}
    `;
    client.write(`${welcome}\n`);
    this.clients[id] = client;
    this.subscriptions[id] = (senderId, msg) => {
        if(id !== senderId){
            this.clients[id].write(`${id}:` + msg);
        }
    };
    this.on('broadcast', this.subscriptions[id]);
});
chanel.on('leave', function(id){
    chanel.removeListener('broadcast', this.subscriptions[id]);
    chanel.emit('broadcast', id, `${id} has left the chat room\n`);
});
chanel.on('shutdown', () => {
    chanel.emit('broadcast', '', 'The server has shut down.\n')
    chanel.removeAllListeners('broadcast');
});
const server = net.createServer(client => {
    const id = `${client.remoteAddress}:${client.remotePort}`;
    chanel.emit('join', id, client);
    client.on('data', data => {
        data = data.toString();
        if(data === 'shutdown\r\n'){
            chanel.emit('shutdown');
        }
        chanel.emit('broadcast', id, data)
    });
    client.on('close', () => {
        chanel.emit('leave', id)
    })
});
server.listen(8889);
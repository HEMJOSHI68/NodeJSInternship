const http = require('http');
const server = http.createServer();

server.addListener('connection' , (socket) => {

    console.log('New connection.');
});
server.listen(3000);
console.log('listening on port 3000');
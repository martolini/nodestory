import { createServer } from 'net'

createServer(socket => {
  socket.on('data', data => {
    socket.write(`Echoing ${socket.remotePort}: ${data}`);
  })
}).listen(1337);

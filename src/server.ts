import { createServer } from 'net';

const server = createServer((socket) => {
  console.log(
    `TCP handshake successful with ${socket.remoteAddress}:${socket.remotePort}`
  );
  socket.write('hello world');
  socket.on('data', (data) => {
    console.log(data.toString());
  });
});

server.listen(parseInt(process.env.PORT || '3000', 10), '127.0.0.1', () => {
  console.log('server is running');
});

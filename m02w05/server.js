const net = require('node:net');
const PORT = 54321

const server = net.createServer((c) => {
    // 'connection' listener.
    console.log('client connected');
    c.on('end', () => {
      console.log('client disconnected');
    });
    c.write('hello\r\n');
    c.pipe(c);
  })

server.listen(PORT, () => {
    console.log(`Server running at ${PORT}...`)
})
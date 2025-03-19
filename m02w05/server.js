const net = require("node:net");
const PORT = 54321;

const connections = [];

const server = net.createServer((connection) => {
  connections.push(connection);

  console.log("Client connected!");
  connection.write("Hello from server!");

  connection.on("data", (data) => {
    console.log("client sending data:", data);

    for (const conn of connections) {
      if (conn !== connection) {
        conn.write(data);
      }
    }
  });

  connection.on("end", () => {
    console.log("client disconnected");
  });

  connection.setEncoding("utf-8");
});

server.listen(PORT, () => {
  console.log(`Server running at ${PORT}...`);
});

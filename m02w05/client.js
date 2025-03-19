const net = require("node:net");

const client = net.createConnection({ port: 54321 }, () => {
  // 'connect' listener.
  console.log("connected to server!");
  client.write("Hi from client!");
  client.setEncoding("utf-8");
});

client.on("data", (data) => {
  console.log(data.toString());
});

client.on("end", () => {
  console.log("disconnected from server");
});

process.stdin.on("data", (data) => {
  client.write(data);
});

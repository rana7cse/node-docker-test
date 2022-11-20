const http = require('http');
const ws = require('websocket').server;
const httpServer = http.createServer();
const webSocketServer = new ws({httpServer});
let connection = null
httpServer.listen(4000, () => console.log("running server"));

webSocketServer.on("request", request => {
  connection = request.accept("echo-protocol", request.origin);

  connection.on('message', data => {
    console.log(data);
    connection.send("Yes received your message");
  })
})

import express from "express";
import { WebSocket, WebSocketServer } from "ws";
import server from "nodemon";

const app = express();
app.use(express.static("../client/dist"));
const serverObj = app.listen(process.env.PORT || 3000);
const webSocketServer = new WebSocketServer({ noServer: true });
server.on("upgrade", (req, socket, head) => {
  webSocketServer.handleUpgrade(req, socket, head, (socket) => {
    socket.send("Hei");
  });
});

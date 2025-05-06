const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8082 })

wss.on("connection", wss => {
     console.log("New Client Connected!");
     
     wss.on("close", () => {
          console.log("Client has Dissconnected")
     })
})
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const HTTP = require("http");
const SocketIO = require("socket.io");

// Model
const dbUrl = "mongodb://dealer:jB=`%r5*.<E^6+k@mongo:27017/poker";

mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });

const Message = mongoose.model("Message", { name: String, message: String });

// Server
const app = express();

// Serve static client
app.use(express.static(__dirname + "/../client"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/messages", (req, res) => {
  Message.find({}, (err, messages) => {
    res.send(messages);
  });
});

app.post("/messages", (req, res) => {
  console.log(req.body);
  const message = new Message(req.body);
  message.save((err) => {
    if (err) res.sendStatus(500);
    io.emit("message", req.body);
    res.sendStatus(200);
  });
});

// Socket
const server = HTTP.createServer(app);
const io = SocketIO(server);
io.on("connection", () => {
  console.log("a user is connected");
});

server.listen(process.env.PORT, () => {
  console.log("server is running on port", server.address().port);
});

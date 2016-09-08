var express = require(express);
var app = express();
var http = require(http).Server(app);

var io = require(socket.io)(http);

app.get('/home', function (req, res) {
    io.emit("data", "This is test data");
});

http.listen(3000, function () {
    use strict;
    console.log("Server Listening");
});
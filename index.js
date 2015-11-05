var express = require("express");
var request = require("request");
var spawn = require("child_process").spawn;
var app = express();

var ffserver = spawn("ffserver", ["-f", "./ffserver.conf"]);

setTimeout(function() {
  var ffmpeg = spawn("ffmpeg", ["-f", "video4linux2", "-s", "320x240", "-r", "16", "-i", "/dev/video0", "http://127.0.0.1:8080/feed1.ffm"])
  ffmpeg.stdout.on("data", function(data) {
    console.log(data.toString())
  });
  ffmpeg.stderr.on("data", function(data) {
    console.log(data.toString())
  });
}, 10000);

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/stream.webm', function(req, res) {
  request.get("http://127.0.0.1:8080/test.webm").pipe(res);
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get("port"));
});
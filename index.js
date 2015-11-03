var express = require('express')
var app = express()
var request = require("request")
var spawn = require("child_process").spawn

var stream = spawn("java", ["-jar", "./stream-m/stream-m.jar", "./stream-m/server.properties"])

stream.stdout.on('data', function (data) {
  console.log('stream stdout: ' + data);
});

stream.stderr.on('data', function (data) {
  console.log('stream stderr: ' + data);
});

stream.on('close', function (code) {
  console.log('stream child process exited with code ' + code);
});

setTimeout(function() {
  var ffmpeg = spawn("ffmpeg", ["-f", "video4linux2", "-s", "320x240", "-r", "16", "-i", "/dev/video0", "-vcodec", "libvpx", "-vb", "448k", "-f", "webm", "http://127.0.0.1:8080/publish/first?password=secret"])

  ffmpeg.stdout.on('data', function (data) {
    console.log('ffmepg stdout: ' + data);
  });

  ffmpeg.stderr.on('data', function (data) {
    console.log('ffmepg stderr: ' + data);
  });

  ffmpeg.on('close', function (code) {
    console.log('ffmepg child process exited with code ' + code);
  });
}, 20000);



app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/stream', function(req, res) {
  request.get('http://127.0.0.1:8080/consume/first').pipe(res)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})

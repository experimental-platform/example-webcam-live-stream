web: node index.js
stream: java -jar stream-m/stream-m.jar stream-m/server.properties
ffmpeg: ffmpeg -f video4linux2 -s 320x240 -r 16 -i /dev/video0 -vcodec libvpx -vb 448k -f webm http://127.0.0.1:8080/publish/first?password=secret
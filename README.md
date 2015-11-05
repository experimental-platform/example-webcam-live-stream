# Webcam Live Stream Example for Experimental Platform

[The node.js code](https://github.com/experimental-platform/example-webcam/blob/master/index.js) has only a few lines and is easy to understand. It uses [ffmpeg](https://www.ffmpeg.org/) and [ffserver](https://trac.ffmpeg.org/wiki/ffserver) to create a ``webm`` stream.

## Requirements

* A machine that runs [Experimental Platform](https://github.com/experimental-platform/platform-configure-script)
* An ordinary webcam, we used [this](http://www.amazon.com/Logitech-Webcam-Widescreen-Calling-Recording/dp/B004FHO5Y6/)

## Installation

    git clone git@github.com:experimental-platform/example-webcam-live-stream.git
    cd example-webcam-live-stream
    git remote add platform ssh://dokku@your-box.local:8022/example-webcam-live-stream
    git push platform master
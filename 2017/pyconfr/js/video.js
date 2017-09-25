/*
Copyright 2017 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

function takeSnapshotWithWebcam() {
    var constraints = {
      video: true,
    };
    var video = document.querySelector('video');

    navigator.mediaDevices.getUserMedia(constraints).
    then(function handleSuccess(stream) {
        window.stream = stream;
        video.src = window.URL.createObjectURL(stream);
    }).catch(function handleError(error) {
        console.log('navigator.getUserMedia error: ', error);
    });

    window.setTimeout(function(stream){
        var canvas = document.querySelector('canvas');
        canvas.width = 720;
        canvas.height = 720;
        canvas.width = 480;
        canvas.height = 480;

        var context = canvas.getContext('2d');
        // context.drawImage(video, (1280 - 720) / 2, 0, 720, 720, 0, 0, 720, 720);
        context.drawImage(video, (640 - 480) / 2, 0, 480, 480, 0, 0, 480, 480);

        var snapshot = document.getElementById('snapshot');
        snapshot.src = canvas.toDataURL('image/webp');
        snapshot.style.display = 'block';

        var track = window.stream.getTracks()[0];
        track.stop();

        video.remove();
    }, 5000);
}

$(document).ready(function() {
    var snapshotTaken = false;
    showSlideCallback = function(slide) {
        if (slide.properties.name === 'about') {
            if (!snapshotTaken) {
                takeSnapshotWithWebcam();
                snapshotTaken = true;
            }
        }
    }
});

var elem = document.documentElement;

function openFullscreen() {
    startVideo();
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
        /* Firefox */
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        /* IE/Edge */
        elem.msRequestFullscreen();
    }
}

/* Close fullscreen */
function closeFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        /* Firefox */
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        /* IE/Edge */
        document.msExitFullscreen();
    }
}

control = 0

function startVideo() {
    control = 1;
    onYouTubeIframeAPIReady();
}

// From https://cobwwweb.com/fullsize-loop-background-video-youtube
// Loads the YouTube IFrame API JavaScript code.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";

// Inserts YouTube JS code into the page.
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;

// onYouTubeIframeAPIReady() is called when the IFrame API is ready to go.
function onYouTubeIframeAPIReady() {
    if (control === 1) {
        player = new YT.Player('player', {
            videoId: 'Wimkqo8gDZ0', // the ID of the video (mentioned above)
            playerVars: {
                autoplay: 1, // start automatically
                controls: 0, // don't show the controls (we can't click them anyways)
                modestbranding: 1, // show smaller logo
                loop: 1, // loop when complete
                playlist: 'Wimkqo8gDZ0' // required for looping, matches the video ID
            }
        });
    } else {
        control = 0;
    }
}
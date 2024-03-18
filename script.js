//Select the Youtube player overlay element
const YTPlayerOverlay = document.querySelector(".youtube-player-overlay");

//Select the button element that triggers the Youtube player overlay
const YTLink = document.querySelector('.button');

//Event listener to the button
YTLink.addEventListener("click", () => {
    //Active class is going to make it visible
    YTPlayerOverlay.classList.add("active");
});

//Event listener to deactivate when clicked
YTPlayerOverlay.addEventListener("click", () => {
    //Remove active class to hide it
    YTPlayerOverlay.classList.remove("active");
})

// Hold's the YouTube player object
let player; 

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: 'W1e7c6dtkww', // YouTube video ID
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // To the button to start video playback
    const YTLink = document.querySelector('.button');
    YTLink.addEventListener("click", () => {

        //Video starts playing to beginning 
        player.seekTo(0);
        event.target.playVideo();
    });
}

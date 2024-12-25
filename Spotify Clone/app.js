console.log("Play The Music");

let songsArr = [
    { songName: "Hope", songPath: '' },
    { songName: "Hollywoods Bleeding", songPath: '' },
    { songName: "Circle", songPath: '' },
    { songName: "I did It", songPath: '' },
    { songName: "Starboy", songPath: '' },
    { songName: "Sunflower", songPath: '' }
];

let songIndex = 0;

let masterPlay = document.getElementById('masterPlay');
let progressBar = document.getElementById('progressBar');
let audioElement = new Audio('Tie-Me-Down.mp3');

// Play or pause music on button click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.add('playing'); // Optional: Add class for UI changes
    } else {
        audioElement.pause();
        masterPlay.classList.remove('playing'); // Optional: Remove class for UI changes
    }
});

// Update progress bar as audio plays
audioElement.addEventListener('timeupdate', () => {
    // Calculate progress percentage
    const progress = (audioElement.currentTime / audioElement.duration) * 100;
    progressBar.value = progress;
});

// Seek audio when progress bar is changed
progressBar.addEventListener('input', () => {
    const seekTime = (progressBar.value / 100) * audioElement.duration;
    audioElement.currentTime = seekTime;
});


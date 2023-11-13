const player = document.querySelector('.player');
const playButton = document.querySelector('.box-play-icon');
const nextButton = document.querySelector('.box-buttons-next');
const prevButton = document.querySelector('.box-buttons-prev');
const audio = document.getElementById('song');
const progressContainer = document.querySelector('.progress-container');
const progress = document.querySelector('.progress');
const songName = document.querySelector('.box-name.song');
const cover = document.querySelector('.player-cover');
const imgSrc = document.getElementById('img_src');
const songs = ['bad place', 'lost in the mail', 'trying'];
const background = document.querySelector('.background')

let songIndex = 0;


function loadSong(song) {
    songName.innerHTML = song;
    audio.src = `audio/${song}.mp3`;
    cover.src = `images/cover${songIndex + 1}.jpg`
}

loadSong(songs[songIndex])

function playSong() {
    player.classList.add('play');
    cover.classList.add('active');
    imgSrc.src = './icons/pause.png';
    audio.play()
}

function pauseSong() {
    player.classList.remove('play');
    cover.classList.remove('active');
    imgSrc.src = './icons/play.png'
    audio.pause()
}

playButton.addEventListener('click', () => {
    const isPlaying = player.classList.contains('play');

    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})

function nextSong() {
    songIndex++;

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    background.src = `images/cover${songIndex + 1}.jpg`
    loadSong(songs[songIndex]);
    playSong();
}

nextButton.addEventListener('click', () => {
    nextSong();
});

function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    background.src = `images/cover${songIndex + 1}.jpg`
    loadSong(songs[songIndex]);
    playSong();
};

prevButton.addEventListener('click', () => {
    prevSong();
});

function progressLine(event) {
    const {duration, currentTime} = event.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`
}

audio.addEventListener('timeupdate', progressLine);

function setProgress(event) {
    const containerWidth = this.clientWidth;
    const clickX = event.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / containerWidth) * duration;
}

progressContainer.addEventListener('click', setProgress)

audio.addEventListener('ended', nextSong);

console.log(audio.currentTime)
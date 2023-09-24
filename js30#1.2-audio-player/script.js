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
const songs = ['badplace', 'lostinthemail', 'trying'];

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
    audio.play()
}

function pauseSong() {
    player.classList.remove('play');
    cover.classList.remove('active');
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
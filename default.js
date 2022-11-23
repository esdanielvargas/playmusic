// menu
const btnOpenMenu = document.getElementById('btnOpenMenu');
const boxMenu = document.querySelector('.menu');
const btnCloseMenu = document.getElementById('btnCloseMenu');
const boxBodyMenu = document.querySelector('.box-body-menu');

// abrir menu & bloquear sitio web
btnOpenMenu.addEventListener('click', () => {
    boxMenu.classList.toggle('active');
    boxBodyMenu.classList.toggle('active');
})

// cerrar menu & caja cuerpo {tocando button}
btnCloseMenu.addEventListener('click', () => {
    boxMenu.classList.remove('active');
    boxBodyMenu.classList.remove('active');
})

// cerra menu & caja cuerpo {tocando caja cuerpo}
boxBodyMenu.addEventListener('click', () => {
    boxMenu.classList.remove('active');
    boxBodyMenu.classList.remove('active');
})

// favorite
const favorite = document.getElementById('favorite');
const fav = document.getElementById('fav');

favorite.addEventListener('click', () => {
    fav.classList.toggle('seagreen');
})

// favorite two
const btnFav = document.getElementById('btnFav');
const favNew = document.querySelector('.fav-new');

btnFav.addEventListener('click', () => {
    favNew.classList.toggle('seagreen');
})

//  volume
const volumeUp = document.getElementById('volume_up');
const volumeUpActive = document.getElementById('volumeUpActive');

volumeUp.addEventListener('click', () => {
    volumeUpActive.classList.toggle('active');
})

// lyrics
const lyrics = document.getElementById('lyrics');
const lyricsActive = document.getElementById('lyricsActive');

lyrics.addEventListener('click', () => {
    lyricsActive.classList.toggle('active');
})

// player
const Shuffle = document.getElementById('btnShuffle');
const btnShuffle = document.querySelector('.btnShuffle');

// activar reproducción aleatoria
Shuffle.addEventListener('click', () => {
    btnShuffle.classList.toggle('active');
    btnRepeat.classList.remove('active');
})

const Repeat = document.getElementById('btnRepeat');
const btnRepeat = document.querySelector('.btnRepeat');

// activar repetición
Repeat.addEventListener('click', () => {
    btnRepeat.classList.toggle('active');
    btnShuffle.classList.remove('active');
})

// audio player
const btnCover = document.getElementById('expand_cover');
const btnExpandMore = document.getElementById('expand_more');
const boxPlayer = document.querySelector('.box-mega-player');

// open {cover}
btnCover.addEventListener('click', () => {
    boxPlayer.classList.toggle('active');
})

// close {button}
btnExpandMore.addEventListener('click', () => {
    boxPlayer.classList.remove('active');
})

// cerrar la barra de reproducción
const ExpandMore = document.getElementById ('expandMore');
const PlayerBar = document.querySelector('.player');

// close {barra}
ExpandMore.addEventListener('click', () => {
    PlayerBar.classList.toggle('active');
})

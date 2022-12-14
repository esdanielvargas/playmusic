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
    fav.classList.toggle('active-accent');
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

const btnCover = document.getElementById('expand_player');
const boxPlayer = document.querySelector('.box-mega-player');
const btnExpandMore = document.getElementById('expand_more');
const btnExpandLess = document.getElementById('expand_less');
const playArrow = document.getElementById('play_arrow');

// open {mobile}
btnCover.addEventListener('click', () => {
    boxPlayer.classList.toggle('active');
})

playArrow.addEventListener('click', () => {
    boxPlayer.classList.toggle('active');
})

// open {laptop}
btnExpandLess.addEventListener('click', () => {
    boxPlayer.classList.toggle('active');
})

// cerrar reproductor
btnExpandMore.addEventListener('click', () => {
    boxPlayer.classList.remove('active');
})

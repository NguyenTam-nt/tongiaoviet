var but = document.querySelector('.bars');
var media = document.querySelector('.media');
var heaader = document.querySelector('.header-nav-mb');

but.onclick = function () {
        media.style.display = 'block';
        heaader.style.animation = 'insli linear 0.3s';
}

var links = document.querySelectorAll('.header-nav-linkmb') 

links.forEach(element => {
  element.onclick =function () {
    media.style.display = 'none';
    heaader.style.animation = 'outsli linear 0.3s';
  }
});
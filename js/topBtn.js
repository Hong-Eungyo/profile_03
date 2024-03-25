const home = document.querySelector('#home'),
      homeHeight = home.offsetHeight,
      topBtn = document.querySelector('.top-btn');
document.addEventListener('scroll', ()=> {
    if (window.scrollY > homeHeight / 2) {
        topBtn.style.opacity = 1;
    } else {
        topBtn.style.opacity = 0;
    }
});
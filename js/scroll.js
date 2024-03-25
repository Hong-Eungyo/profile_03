// scroll 시 header menu item에 클래스 변화
const homeCon = document.querySelector("#home").getBoundingClientRect().top + window.scrollY + 300;
const aboutCon = document.querySelector("#about").getBoundingClientRect().top + window.scrollY + 300;
const skillCon = document.querySelector("#skills").getBoundingClientRect().top + window.scrollY + 300;
const workCon = document.querySelector("#work").getBoundingClientRect().top + window.scrollY + 300;
const contactCon = document.querySelector("#contact").getBoundingClientRect().top + window.scrollY;
const headerMenus = document.querySelectorAll('.header_menu_item');

document.addEventListener('scroll', ()=> {
    const activeBtn = document.querySelector('.active');

        if(window.scrollY <= homeCon) {
            activeBtn.classList.remove('active');
            headerMenus[0].classList.add('active');
        } else if (window.scrollY <= aboutCon) {
            activeBtn.classList.remove('active');
            headerMenus[1].classList.add('active');
        } else if (window.scrollY <= skillCon) {
            activeBtn.classList.remove('active');
            headerMenus[2].classList.add('active');
        } else if (window.scrollY <= workCon) {
            activeBtn.classList.remove('active');
            headerMenus[3].classList.add('active');
        } else {
            activeBtn.classList.remove('active');
            headerMenus[4].classList.add('active');
        }
})
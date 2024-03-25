const navToggle = document.querySelector('.hamburger'),
      navMenu = document.querySelector('.header_nav');

// nav btn(hamburger) toggle
navToggle.addEventListener('click', ()=> {
    navMenu.classList.toggle('open');
})

// header menu click event
navMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('open');
})


//클릭한 메뉴 활성화시키기
const menus = document.querySelectorAll('.header_menu_item');

menus.forEach((menu)=> {
    menu.addEventListener('click', (e)=>{
        const activeBtn = document.querySelector('.active');
        activeBtn.classList.remove('active');
        e.target.classList.add('active');
    })
})


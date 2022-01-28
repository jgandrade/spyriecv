let burgerBtn = document.querySelector(".burger-btn");
let navMenu = document.querySelector(".nav-menu");

burgerBtn.addEventListener('click', () => {
    navMenu.classList.remove('nav-menu-none');
    navMenu.classList.add('nav-menu-block');
});

let closeBtn = document.querySelector('.close');

closeBtn.addEventListener('click', ()=>{
    navMenu.classList.add('nav-menu-none');
    navMenu.classList.remove('nav-menu-block');
});

console.log("HELLO!");
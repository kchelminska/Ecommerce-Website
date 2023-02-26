const burger = document.querySelector('.burger');
const nav = document.querySelector(".menu");
const close = document.querySelector(".close");

burger.addEventListener('click', () => {
    nav.classList.add('active');
});

close.addEventListener('click', () => {
    nav.classList.remove('active');
});
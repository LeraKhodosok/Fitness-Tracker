const menu = document.querySelector('.menu');
const menuToggle = document.querySelector('.menu_toggle');
const menuClose = document.querySelector('.fa-times');
const menuMobile = document.querySelector('.mobile_menu');

menu.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    menuMobile.classList.add('active');
});

menuClose.addEventListener('click', () => {
    menuMobile.classList.remove('active');
});

document.addEventListener('click', (e) => {
    let click = e.target;
    click.parentElement.parentElement.parentElement.parentElement.classList.remove('active');
});

document.addEventListener('click', (e) => {
    let click = e.target;
    click.parentElement.parentElement.classList.remove('active');
})
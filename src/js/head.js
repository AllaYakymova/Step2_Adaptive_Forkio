"use strict";

let burger = document.querySelector('.head__burger-toggle');
let menu = document.querySelector(".head__nav");

burger.addEventListener('click', () => {
    burger.classList.toggle('burger-toggle_active');
    menu.classList.toggle('nav-active');
})
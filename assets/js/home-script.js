"use strict";

let menu = document.querySelector("header .menu")

menu.addEventListener("mouseover",function(){
    this.classList.remove("d-none")
})
$('.single-item').slick();

let headerBtn = document.querySelector(".category button");

let cardImg = document.querySelector("main #offer .card img")

cardImg.addEventListener("mouseover",function(){
    this.setAttribute("src","../assets/images/home-images/ford-gt50.webp")
})

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
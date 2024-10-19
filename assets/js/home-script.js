"use strict";

let menu = document.querySelector("header .menu")


cardImg.addEventListener("mouseover",function(){
    this.setAttribute("src","../assets/images/home-images/ford-gt50.webp")
})
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
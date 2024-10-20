"use strict";
let icons = document.querySelectorAll("#products .icons i")

icons.forEach(element => {
    element.addEventListener("click", function() {
        icons.forEach(el => {
            el.style.backgroundColor = "white";
            el.style.color = "#7D7D7D";
        })
        this.style.backgroundColor = "#C92C2C";
        this.style.color = "white"
    });
});


let paginationA = document.querySelectorAll(".pagination span");

paginationA.forEach(element => {
    element.addEventListener("click", function(event) {
        event.preventDefault();
        
        paginationA.forEach(el => {
            el.style.backgroundColor = "white";
            el.style.color = "black";
        });

        this.style.backgroundColor = "black";
        this.style.color = "white";
        this.style.border = "1px solid black";
    });
});

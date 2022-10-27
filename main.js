

// console.log(document)



// console.log(hamburgerdiv.)


var hamburgerdiv = document.querySelector(".hamburger")
var mobileLinks = document.querySelector(".moblie-links-holder")
var mybackdrop = document.querySelector(".backdrop")

function dosomething() {
hamburgerdiv.classList.toggle("showburger")
mobileLinks.classList.toggle("show-moblie-links-holder")
mybackdrop.classList.toggle("show-backdrop")
}
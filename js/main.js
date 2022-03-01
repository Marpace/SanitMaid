// Selecting elements 
// Navigation
const toggler = document.querySelector(".navbar-toggler-c");
const togglerDivs = [...document.querySelectorAll(".toggler-div")];
const navMenu = document.querySelector(".collapsed-nav-c");
// const navLinksContainer = document.querySelector(".nav-links-c");
const navLinks = document.querySelectorAll(".nav-link-c a");
const servicesMenu = document.querySelector(".services-nav-link");
const navBar = document.querySelector(".navbar-c");
const navLogo = document.querySelector(".nav-brand-c");
const navWrap = document.querySelector(".nav-wrap-c");
const dropDownIcon = document.querySelector(".services-nav-link i");
const currentPageUnderline = document.querySelector(".current-page");
const bookingBtn = document.querySelector(".booking-btn");



//Drop down menu
const dropDownTrigger = document.querySelector(".drop-down-trigger");
const dropDownMenu = document.querySelector(".drop-down-menu");

//Selecting body element
const body = document.querySelector("body");


if(screen.width >= 992){
    bookingBtn.classList.add("button-outline");
    bookingBtn.classList.remove("button-outline-light");
    console.log("screen size is 992 or bigger")
}

// // detecting scroll to animate navbar when scrolled 80px from top
body.addEventListener("scroll", function() {
    if(screen.width >= 992){
        if(body.scrollTop > 80) {
            navWrap.style.backgroundColor = "white";
        } else {
            navWrap.style.backgroundColor = "transparent";    
        }
    }
});



    // Navbar toggler animation 

let isVisible = false;
const toggleMenu = function(){
    if(!isVisible){
        //Toggler into "x" animation
        togglerDivs[0].style.top = "15px";
        togglerDivs[2].style.top = "15px";
        togglerDivs[1].style.opacity = "0";
        setTimeout(() => {
            togglerDivs[0].style.transform = "rotate(45deg)";
            togglerDivs[2].style.transform = "rotate(-45deg)";
        }, 200);
        // Nav menu extend  animation 
        navMenu.style.left = "0"       
        isVisible = true;    
    } else {
        //Toggler into lines animation
        togglerDivs[0].style.transform = "rotate(0deg)";
        togglerDivs[2].style.transform = "rotate(0deg)";
        togglerDivs[1].style.opacity = "1";      
        setTimeout(() => {
            togglerDivs[0].style.top = "";
            togglerDivs[2].style.top = "30px";
        }, 200);     
        // Nav menu collapse animation
        navMenu.style.left = "100%"
        isVisible = false;
    }
}


toggler.addEventListener("click", function(){
    toggleMenu();
});


// Drop down menu animation
// dropDownTrigger.addEventListener("click", function(){
//     $(".drop-down-menu").slideToggle();
//     console.log("clicked")
// });


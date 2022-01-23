// Selecting elements 
// Navigation
const toggler = document.querySelector(".navbar-toggler-c");
const togglerDivs = [...document.querySelectorAll(".toggler-div")];
const navMenu = document.querySelector(".collapsed-nav-c");
const navLinks = document.querySelector(".nav-links-c");
const servicesMenu = document.querySelector(".services-nav-link");
const navBar = document.querySelector(".navbar-c");
const navLogo = document.querySelector(".nav-brand-c")



//Drop down menu
const dropDownTrigger = document.querySelector(".drop-down-trigger");
const dropDownMenu = document.querySelector(".drop-down-menu");

//Selecting body element
const body = document.querySelector("body");


// detecting scroll to animate navbar when scrolled 80px from top
body.addEventListener("scroll", function() {
    if(body.scrollTop > 80){
        navBar.style.backgroundColor = ("rgb(49, 74, 126)");
        navBar.style.height = "80px"
        navLogo.style.height = "50px"
        navLogo.style.width = "50px"
        navLogo.style.marginLeft = "20px"
        togglerDivs.forEach(div => {
            div.style.backgroundColor = "rgb(255, 255, 255)";
        })

    }
    else {
        navBar.style.backgroundColor = "";

        navLogo.style.height = "60px"
        navLogo.style.width = "60px"
        navLogo.style.marginLeft = "0px"

        togglerDivs.forEach(div => {
            div.style.backgroundColor = "rgb(0, 0, 0)";
        })
    }
});


//   function for animating navbar toggler when page loads 
window.onload = function (){
    let delay = 0;
    togglerDivs.forEach(div => {
        setTimeout(() => {
            div.style.width = "100%"
        }, delay);
        delay += 150;
    });
};


    // Navbar toggler animation 

let isVisible = false;
const toggleMenu = function(){
    if(!isVisible){

        togglerDivs.forEach(div => {
            div.style.backgroundColor = "white";
        })

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
        
        if (navBar.style.backgroundColor === ""){
            togglerDivs.forEach(div => {
                div.style.backgroundColor = "rgb(0, 0, 0)";
            })
        }


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
        
        // Drop down collapse animation
        dropDownMenu.style.height = "0px"

        isVisible = false;
    }
}


toggler.addEventListener("click", function(){
    toggleMenu();
});

// Drop down menu animation (only for screen width 599px or less)
const toggleDropDownMenu = function() {
    if(window.screen.width <= 599){
        if(getComputedStyle(dropDownMenu).height === "0px"){   
            dropDownMenu.style.height = "265px";
        } else {
            dropDownMenu.style.height = "0px";
        }
    }
};

dropDownTrigger.addEventListener("click", function(){
    toggleDropDownMenu()
});


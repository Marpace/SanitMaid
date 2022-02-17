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




//Drop down menu
const dropDownTrigger = document.querySelector(".drop-down-trigger");
const dropDownMenu = document.querySelector(".drop-down-menu");

//Selecting body element
const body = document.querySelector("body");


// detecting scroll to animate navbar when scrolled 80px from top
body.addEventListener("scroll", function() {
    if(body.scrollTop > 80){
        if(screen.width < 768) {
            navBar.style.backgroundColor = ("rgb(1, 11, 32)");
            navBar.style.height = "80px"
            // navLogo.style.height = "50px"
            // navLogo.style.width = "50px"
            // navLogo.style.marginLeft = "20px"
            navLogo.children[0].style.color = "white";
            togglerDivs.forEach(div => {
                div.style.backgroundColor = "rgb(255, 255, 255)";
            });      
        } else if(screen.width >= 768) {
            navWrap.style.backgroundColor = "rgb(1, 11, 32)";
            navBar.style.height = "80px";
            dropDownIcon.style.color = "white";
            currentPageUnderline.style.borderBottom = "2px solid white";
            navLogo.children[0].style.color = "white";
            navLinks.forEach(link => {
                link.style.color = "white"
            });
            
        } 
    } else {
        if(screen.width >= 768) {
            navLinks.forEach(link => {
                link.style.color = "rgb(1, 11, 32)";
            });
            navLogo.children[0].style.color = "black";
            currentPageUnderline.style.borderBottom = "2px solid black";
            dropDownIcon.style.color = "black"
        }
        navBar.style.height = "100px"
        navWrap.style.backgroundColor = "";
        navBar.style.backgroundColor = "";
        navLogo.children[0].style.color = "black";
        // navLogo.style.height = "60px"
        // navLogo.style.width = "60px"
        // navLogo.style.marginLeft = "0px"
    
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

        navLogo.children[0].style.color = "white";
        
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

        if(getComputedStyle(navBar).backgroundColor !== "rgb(1, 11, 32)"){
            navLogo.children[0].style.color = "black";
        }
        
        // Drop down collapse animation
        // dropDownMenu.style.height = "0px"

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


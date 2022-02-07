
// Select header element 
const headerText = document.querySelector(".header-text");
const donwArrow = document.querySelector(".down-arrow")

// //on load animations **REMINDER** switch this to css animation 
// window.onload = function (){  
//     //animating header text element
//     headerText.style.opacity = "1";
//     headerText.style.transform = "translateY(0)";
// };

body.addEventListener("scroll", function() {
    if(body.scrollTop> 80){
        donwArrow.style.opacity = "0";
    } else {
        donwArrow.style.opacity = "1";
    }
})


//selecting carousel elements
const carouselImages = document.querySelectorAll(".desktop-image");
const mobileCarouselImages = document.querySelectorAll(".mobile-image")
const carouselIndicators = document.querySelectorAll(".services-carousel-controls-indicators div");
const carouselInfoItems = document.querySelectorAll(".services-carousel-info-item");
const prevBtn = document.querySelector(".fa-chevron-left");
const nextBtn = document.querySelector(".fa-chevron-right");

// function to remove and add classes
function switchClass(el, class1, class2){
    el.classList.remove(class1);
    el.classList.add(class2);
}

//variables to keep track of active carousel items 
let imageIndex = 3
let infoIndex = 0
let indicatorIndex = 0;

//boolean to check if animation is in progress
let isAnimating = false;


// function to rotate carousel images 
function rotateImages(direction) {
    if(screen.width >= 768){
        if(direction === "forward") {
            imageIndex += 1;
            if(imageIndex >= 5) {imageIndex = 1}
            carouselImages.forEach(image => {
                if (image.classList.contains("image-active-c")) {switchClass(image, "image-active-c", "image-left-c")}
                else if (image.classList.contains("image-left-c")) {
                    switchClass(image, "image-left-c", "image-far-left-c");
                    image.src = `images/carousel-img-${imageIndex}.jpg`
                }
                else if (image.classList.contains("image-right-c")) {switchClass(image, "image-right-c", "image-active-c")}
                else if (image.classList.contains("image-far-right-c")) {switchClass(image, "image-far-right-c", "image-right-c")}           
                else if (image.classList.contains("image-far-left-c")) {
                    switchClass(image, "image-far-left-c", "image-far-right-c");
                    image.src = `images/carousel-img-${imageIndex}.jpg`
                }           
            })       
        } else if (direction === "backwards") {
            imageIndex -= 1;
            if(imageIndex <= 0) {imageIndex = 4}
            carouselImages.forEach(image => {
                if (image.classList.contains("image-active-c")) {switchClass(image, "image-active-c", "image-right-c")}
                else if (image.classList.contains("image-left-c")) {switchClass(image, "image-left-c", "image-active-c")}
                else if (image.classList.contains("image-right-c")){
                    switchClass(image, "image-right-c", "image-far-right-c")
                    image.src = `images/carousel-img-${imageIndex}.jpg`
                }
                else if (image.classList.contains("image-far-left-c")) {switchClass(image, "image-far-left-c", "image-left-c")}           
                else if (image.classList.contains("image-far-right-c")) {
                    switchClass(image, "image-far-right-c", "image-far-left-c");
                    image.src = `images/carousel-img-${imageIndex}.jpg`
                }           
            })
        }
    } else {
        if(direction === "forward") {
            mobileCarouselImages.forEach(img => {
                if(img.classList.contains("image-active-c")){ switchClass(img, "image-active-c", "image-left-c")}
                else if(img.classList.contains("image-right-c")) {switchClass(img, "image-right-c", "image-active-c")}
                else if(img.classList.contains("image-left-c")) {switchClass(img, "image-left-c", "image-behind")}
                else if(img.classList.contains("image-behind")) {switchClass(img, "image-behind", "image-right-c")}
            });
        } else if(direction === "backwards"){
            mobileCarouselImages.forEach(img => {
                if(img.classList.contains("image-active-c")){ switchClass(img, "image-active-c", "image-right-c")}
                else if(img.classList.contains("image-right-c")) {switchClass(img, "image-right-c", "image-behind")}
                else if(img.classList.contains("image-left-c")) {switchClass(img, "image-left-c", "image-active-c")}
                else if(img.classList.contains("image-behind")) {switchClass(img, "image-behind", "image-left-c")}
            });
        }
    }
};

// function to rotate carousel text 
function rotateInfo(direction) {
    carouselInfoItems.forEach(item => {
        item.classList.remove("item-active-c")
    });
    if(direction === "forward") {
        infoIndex += 1
        if(infoIndex > 3 ) {infoIndex = 0};
    } else if (direction === "backwards") {
        infoIndex -= 1; 
        if(infoIndex < 0 ) {infoIndex = 3}; 
    }
    carouselInfoItems[infoIndex].classList.add("item-active-c");
}
 
// function to switch carousel indicators  
function switchIndicator(direction){
    carouselIndicators.forEach(item => {
        item.classList.remove("indicator-active")
    });
    if(direction === "forward") {
        indicatorIndex += 1
        if(indicatorIndex > 3 ) {indicatorIndex = 0};
    } else if (direction === "backwards") {
        indicatorIndex -= 1; 
        if(indicatorIndex < 0 ) {indicatorIndex = 3}; 
    }
    carouselIndicators[indicatorIndex].classList.add("indicator-active");
}


//adding click events to carousel previous and next buttons 
prevBtn.addEventListener("click", function(){
    if(isAnimating) return;
    isAnimating = true;
    rotateImages("backwards");
    rotateInfo("backwards");
    switchIndicator("backwards");
    setTimeout(() => {
        isAnimating = false;
    }, 400);
});
nextBtn.addEventListener("click", function(){
    if(isAnimating) return;
    isAnimating = true;
    rotateImages("forward");
    rotateInfo("forward");
    switchIndicator("forward");
    setTimeout(() => {
        isAnimating = false;
    }, 400);
});
// quote form functions

const quoteItems = [...document.querySelectorAll(".quote-form-item")]
const quoteButtons = [...document.querySelectorAll(".quote-form-item-button")]
const iconText = [...document.querySelectorAll(".quote-icons-item-text")]

let quoteIndex = 0;


//slide content up and down when an option is clicked
$(".quote-form-item-title").click(function(){
    $(this).next().slideToggle();
    $(this).parent().toggleClass("open");
});


$("#size-options").parent().prev().click(function(){
    $("#size-input").focus();
});
// $("#bath-next-btn").click(function (){
//     $("#size-input").focus();
//     console.log("clicked")
// });

let iconIndex = 0;

if (screen.width <= 767){
    $(".quote-form-item-button").click(function(){
        $(this).parent().slideToggle();
        $(this).parent().parent().next().children(".quote-form-item-wrap").slideToggle();
        $(this).parent().parent().toggleClass("open");
        $(this).parent().parent().next().toggleClass("open");
    });
}
// } else {
//     $(".quote-form-item-button").each(function(){
//         $(this).click(function(){
//             console.log($(this).parent().parent())
//             $(this).parent().parent().css("opacity", "0")
//             $(this).parent().parent().next().css("opacity", "1")
//             $(".quote-icons-item-text").eq(iconIndex).fadeIn(600, "linear");
//             iconIndex += 1;
//         });  
//     })
// }

if(screen.width >= 768) {

    quoteButtons.forEach(button => {
        button.addEventListener("click", function(){
            console.log(quoteItems[quoteIndex])
            quoteItems[quoteIndex].style.opacity = "0";
            quoteItems[quoteIndex].style.zIndex = "0";
            quoteItems[quoteIndex + 1].style.opacity = "1";
            quoteItems[quoteIndex + 1].style.zIndex = "10";
            iconText[quoteIndex].style.opacity = "1";
            quoteIndex += 1;
        });
    });
}

function getSelectedValue() {
    const value = document.querySelector('input[name="cleaning-type"]:checked');

    console.log(value.nextElementSibling.innerHTML.toString())
}

quoteButtons[0].addEventListener("click", function(){
    getSelectedValue();
});
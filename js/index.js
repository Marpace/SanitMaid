
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


// quote form functions-----------------------------------------------

const quoteItems = [...document.querySelectorAll(".quote-form-item")]
const quoteButtons = [...document.querySelectorAll(".quote-form-item-button")]
const iconText = [...document.querySelectorAll(".quote-icons-item-text")]
const quoteTitles = document.querySelectorAll(".quote-form-item-title h2")

const sizeText = document.querySelector(".size-text");
const sizeButton = document.querySelector(".size-button");
const sizeInput = document.querySelector("#size-input");


const extrasButton = document.querySelector(".extras-button");
const extrasInput = document.querySelectorAll(".extras-input");
const extrasIconItem = document.querySelector(".extras-icon-item");

//slide content up and down when an option is clicked
$(".quote-form-item-title").click(function(){
    if($(this).next().css("display") === "block"){
        $(this).next().slideToggle();
        $(this).parent().toggleClass("open");
    } else {
        $(".quote-form-item-wrap").each(function(){
            $(this).slideUp();
            $(this).parent().removeClass("open");    
        })
        $(this).next().slideToggle();
        $(this).parent().toggleClass("open");
    }
});


$("#size-options").parent().prev().click(function(){
    $("#size-input").focus();
});

// adding event listeners to the next buttons in the quote form
quoteButtons.forEach(button => {
    button.addEventListener("click", function(){
        let index = quoteButtons.indexOf(this);
        const selectedValue = $(this).prev().children("input:checked").next().html();

        if(selectedValue !== undefined){
            if(screen.width < 768){
                $(this).parent().slideToggle();
                $(this).parent().parent().next().children(".quote-form-item-wrap").slideToggle();
                $(this).parent().parent().toggleClass("open");
                $(this).parent().parent().next().toggleClass("open")
                $(this).parent().prev().children("img").fadeIn(600, "linear")
                this.parentElement.previousElementSibling.style.justifyContent = "space-between";
                this.parentElement.previousElementSibling.children[1].innerHTML = selectedValue;
            } else {
                quoteItems[index].classList.toggle("fade-in")
                quoteItems[index + 1].classList.toggle("fade-in")
                iconText[index].style.opacity = "1";
                iconText[index].innerHTML = selectedValue;
            }
            index += 1;
        } else {
            $(this).next().fadeIn(400, "linear")
        }
    });
});
// function for size section because of different input type 
sizeButton.addEventListener("click", function(){
    
    if(sizeInput.value === ""){
        $(this).next().fadeIn(400, "linear")
    } else {
        if(screen.width < 768) {
            $(this).parent().slideToggle();
            $(this).parent().parent().next().children(".quote-form-item-wrap").slideToggle();
            $(this).parent().parent().toggleClass("open");
            $(this).parent().parent().next().toggleClass("open")
            $(this).parent().prev().children("img").fadeIn(600, "linear")
            this.parentElement.previousElementSibling.style.justifyContent = "space-between";
            this.parentElement.previousElementSibling.children[1].innerHTML = `${sizeInput.value} ft&sup2;`

        } else {
            quoteItems[3].classList.toggle("fade-in");
            quoteItems[4].classList.toggle("fade-in");
            quoteItems.splice(3, 1);
            sizeText.style.opacity = "1"
            sizeText.innerHTML = `${sizeInput.value} ft&sup2;`
        }
    }
    
});
// function for extras section because of different input type 
extrasButton.addEventListener("click", function(){
    const checkedItems = document.querySelectorAll('input[type="checkbox"]:checked');

    if(checkedItems.length > 0){
        if(screen.width < 768) {
            $(this).parent().slideToggle();
            $(this).parent().parent().next().children(".quote-form-item-wrap").slideToggle();
            $(this).parent().parent().toggleClass("open");
            $(this).parent().parent().next().toggleClass("open")
            $(this).parent().prev().children("img").fadeIn(600, "linear")
            this.parentElement.previousElementSibling.style.justifyContent = "space-between";
            this.parentElement.previousElementSibling.children[1].innerHTML = "";
        } else {
            quoteItems[3].classList.toggle("fade-in");
            quoteItems[4].classList.toggle("fade-in");
            quoteItems.splice(3, 1);
        }
        extrasInput.forEach(input => {
            if (input.checked){
                if(screen.width <  768) {
                    const newEl = document.createElement("h2");
                    newEl.innerHTML = input.nextElementSibling.innerHTML;
                    this.parentElement.previousElementSibling.children[1].appendChild(newEl);
                    console.log(input.nextElementSibling.innerHTML)
                } else {
                    const newEl = document.createElement("div");
                    newEl.classList.add("extras-text");
                    newEl.innerHTML = input.nextElementSibling.innerHTML;
                    extrasIconItem.appendChild(newEl);
                }
            }
        });
    } else {
        $(this).next().fadeIn(400, "linear")
    }
    
});

//Event listener for book now button to display second part of quote form

$(".quote-price-button").click(function(){
    $(".hidden-form").fadeIn(600, "linear")
});

$(".hidden-form-top-btn").click(function(){
    $(".hidden-form").fadeOut(600, "linear")
});
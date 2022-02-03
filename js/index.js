

//selecting carousel elements
const carouselImages = document.querySelectorAll(".services-carousel-images img");
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
    setTimeout(() => {
        isAnimating = false;
    }, 400);
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


//slide content up and down when an option is clicked
$(".quote-form-item-title").click(function(){
    $(this).next().slideToggle();
    $(this).parent().toggleClass("open");
});

$("#size-options").parent().prev().click(function(){
    $("#size-input").focus();
});

$(".quote-form-item-button").children().click(function(){
    $(this).parent().parent().slideToggle();
    $(this).parent().parent().parent().next().children(".quote-form-item-wrap").slideToggle();
    $(this).parent().parent().parent().toggleClass("open");
    $(this).parent().parent().parent().next().toggleClass("open");
});

console.log($(".quote-form-item-button").children())
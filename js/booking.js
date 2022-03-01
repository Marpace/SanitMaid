// quote form functions-----------------------------------------------

const quoteItems = [...document.querySelectorAll(".quote-form-item")]
const quoteButtons = [...document.querySelectorAll(".quote-form-item-button")]
const iconText = [...document.querySelectorAll(".quote-icons-item-text")]
const icons = [...document.querySelectorAll(".quote-icons-item")]
const quoteTitles = document.querySelectorAll(".quote-form-item-title h2")

const sizeIcon = document.querySelector(".size-icon");
const sizeText = document.querySelector(".size-text");
const sizeButton = document.querySelector(".size-button");
const sizeInput = document.querySelector("#size-input");


const extrasButton = document.querySelector(".extras-button");
const extrasInput = document.querySelectorAll(".extras-input");
const extrasIconItem = document.querySelector(".extras-icon-item");

const frequencyBtn = document.querySelector(".frequency-btn");
const frequencyIcon = document.querySelector(".frequency-icon");


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
                icons[index].style.opacity = "1";
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
            icons.splice(3, 1);
            sizeIcon.style.opacity = "1"
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
            icons.splice(3, 1);
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
                    extrasIconItem.style.opacity = "1";
                }
            }
        });
    } 
});

//Event listener for book now button to display second part of quote form

$(".quote-price-button").click(function(){
    $(".hidden-form").fadeIn(600, "linear")
});


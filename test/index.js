const quoteButtons = [...document.querySelectorAll(".quote-item-button button")];
const quoteIndicators = [...document.querySelectorAll(".quote-indicator")];
const quoteItems = [...document.querySelectorAll(".quote-item")];

const cleaningOptions = [...document.querySelectorAll(".cleaning-options")]
const bedroomOptions = [...document.querySelectorAll(".bedroom-options")]
const bathroomOptions = [...document.querySelectorAll(".bathroom-options")]
const extrasOptions = [...document.querySelectorAll(".extras-options")]
const frequencyOptions = [...document.querySelectorAll(".frequency-options")]

const cleaningSelection = document.querySelector(".cleaning-selection")
const bedroomSelection = document.querySelector(".bedroom-selection")
const bathroomSelection = document.querySelector(".bathroom-selection")
const sizeSelection = document.querySelector(".size-selection")
const extrasSelection = document.querySelector(".extras-selection")
const frequencySelection = document.querySelector(".frequency-selection")

const summaryItems = [...document.querySelectorAll(".quote-summary-item")]

const sizeInput = document.querySelector("#size-input");



quoteButtons.forEach(button => {
    button.addEventListener("click", function(){
        const element = button.parentElement.parentElement.parentElement.nextElementSibling

        if(!element) return;
        element.style.display = "block"


    });
});


quoteIndicators.forEach(indicator => {
    indicator.addEventListener("click", function() {
        const index = quoteIndicators.indexOf(indicator)


        quoteItems.forEach(item => {
            item.style.display = "none"
        })

        quoteItems[index].style.display = "block"


    });
});


function selectSize(){
    sizeSelection.innerHTML = sizeInput.value; 
    summaryItems[3].style.display = "flex"
}

function selectExtras(arr, element1, element2){
    arr.forEach(item => {
        item.addEventListener("click", function(){
            const newElement = document.createElement("P");           
            newElement.innerHTML = item.innerHTML;
            element1.appendChild(newElement);
            element2.style.display = "flex";
        });
    });
}

function selectOption(arr, element1, element2){
    arr.forEach(item => {
        item.addEventListener("click", function(){
            element1.innerHTML = item.innerHTML;
            element2.style.display = "flex";
        });
    });
};

selectOption(cleaningOptions, cleaningSelection, summaryItems[0]);
selectOption(bedroomOptions, bedroomSelection, summaryItems[1]);
selectOption(bathroomOptions, bathroomSelection, summaryItems[2]);
selectExtras(extrasOptions, extrasSelection, summaryItems[4]);
selectOption(frequencyOptions, frequencySelection, summaryItems[5]);

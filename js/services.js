
$(".accordion-toggle").click(function(){

    //++++++++++ Uncomment to have only one section 
    //of the accordion open ++++++++++

    // if($(this).parent().next().css("display") === "block"){
    //     $(this).parent().next().slideToggle(600, "swing");
    // } else {
    //     $(".accordion-item-content").each(function(){
    //         $(this).slideUp(600, "swing");
    //     });
    //     $(this).parent().next().slideToggle(600, "swing");
    // }

    // Opens accordion section 
    $(this).parent().next().slideToggle(600, "swing");

    // toggles "+" sign into "-" 
    $(this).children(".toggle-2").toggleClass("accordion-open");

});

const rooms = document.querySelectorAll(".room");

rooms.forEach(room => {
    room.addEventListener("click", function(){
        const titleHeight = getComputedStyle(this.children[1]).height;

        // check whether image is visible
        if(getComputedStyle(this.children[0]).opacity === "1"){
            // moves title to the top
            this.children[1].style.top = "0";
            this.children[1].style.transform = "translate(-50%, 0)"
            
            setTimeout(()=> {
                // makes image disappear 
                this.children[0].style.opacity = "0"
    
                // animates height of room div
                this.style.maxHeight = "600px"
    
                //Adjust list padding according to title height
                this.children[2].style.padding = `${titleHeight} 10px 10px`
    
            }, 400)
        } else {
            // makes image appear 
            this.children[0].style.opacity = "1"

            // animates height of room div
            this.style.maxHeight = "300px"
            
            setTimeout(()=> {
                // moves title to the center
                this.children[1].style.top = "50%";
                this.children[1].style.transform = "translate(-50%, -50%)"
            }, 400)
        }




    });
});

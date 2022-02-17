// $(".accordion-toggle").each(function(){
//     $(this).click(function(){
//         $(this).parent().next().slideToggle(600, "swing");
//         console.log($(this).next())     
//     });

// })

$(".accordion-toggle").click(function(){
    if($(this).parent().next().css("display") === "block"){
        $(this).parent().next().slideToggle(600, "swing");
    } else {
        $(".accordion-item-content").each(function(){
            $(this).slideUp(600, "swing");
        });
        $(this).parent().next().slideToggle(600, "swing");
    }
    console.log($(".accordion-toggle"))
});


// $(".quote-form-item-title").click(function(){
//     if($(this).next().css("display") === "block"){
//         $(this).next().slideToggle();
//     } else {
//         $(".quote-form-item-wrap").each(function(){
//             $(this).slideUp(); 
//         })
//         $(this).next().slideToggle();
//     }
// });

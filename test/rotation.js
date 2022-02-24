const btn = document.querySelector("button");
const img = [...document.querySelectorAll("img")]
// const img = document.querySelector("img")

btn.addEventListener("click", function(){
    spin();
});


console.log(img.length - 1)

const spin = function(){
    let time = 0;
    for(let i=img.length - 1; i>=0; i--){
        setTimeout(() => {
            img[i].style.opacity = "0";
        }, time);
        time += 100;
        console.log(i);
    }
}

const replace = function(){

    let time = 0;
    for(let i=1; i<=36; i++){
        setTimeout(() => {
            img.setAttribute("src", `test_images/image (${i})`)
        }, time);
        time += 200;
    }
};
document.querySelector(".bar").addEventListener("click" , function() {
    document.querySelector(".navigation").style.visibility = "visible";
    document.querySelector(".close").style.display ="block";
    document.querySelector(".bar").style.visibility = "hidden";
    document.querySelector(".header").style.backgroundImage = "none";
    document.querySelector(".header").style.backgroundColor = "rgb(0, 0, 0)";
})

document.querySelector(".close").addEventListener("click" , function() {
    document.querySelector(".navigation").style.visibility = "hidden";
    document.querySelector(".close").style.display ="none";
    document.querySelector(".bar").style.visibility = "visible";
    document.querySelector(".header").style.backgroundImage = "url(/images/mobile/image-hero.jpg)";
    document.querySelector(".header").style.backgroundColor = "none";
})


var toggle = 0;

function menuDownFunction() {
    if (toggle == 0) {
        document.getElementById("header").style.animationName = "headerOpen";
        document.getElementById("header").style.animationPlayState = "running";
        document.getElementById("header_downMenu").style.display = "block";
        document.getElementById("header_downMenu").style.top = "50px";
        document.getElementById("menuButton").style.color = "rgb(150,150,150)"
        document.getElementById("menuButton").style.fontWeight = "700"
        toggle = 1;
    } else {
        document.getElementById("header").style.animationName = "headerClose";
        document.getElementById("header").style.animationDuration = "0.2s";
        document.getElementById("header").style.animationTimingFunction = "ease-out";
        document.getElementById("header").style.animationPlayState = "running";
        document.getElementById("header_downMenu").style.display = "none";
        document.getElementById("header_downMenu").style.top = "0";
        document.getElementById("menuButton").style.color = "rgb(0,0,0)"
        document.getElementById("menuButton").style.fontWeight = "400"
        toggle = 0;
    }
}

function onScroll() {
    toggle = 1;
    menuDownFunction();
}

window.onload = function () {
    document.getElementById("menuButton").addEventListener('click', function () {
        menuDownFunction();
    });
}

window.addEventListener('scroll', onScroll);
window.addEventListener('load', function () {
    setTimeout(scrollTo, 0, 0, 1);
}, false);
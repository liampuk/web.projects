var title = "ALGORITHMS";
var subTitle = "Popular Algorithms in Computer Science";
var wait = true;

function init() {
    loadAnim();
}

function loadAnim() {
    var mainHeader = document.getElementsByTagName("h1")[0];
    var subHeader = document.getElementsByTagName("h2")[0];
    typeWriter(mainHeader, title, 1, 50, 200);
    setTimeout(function () {
        subHeader.style.opacity = "1";
    }, 500);
}

function typeWriter(elem, text, i, min, max) {
    if (i <= text.length) {
        setTimeout(function () {
            elem.innerText = text.substring(0, i);
            typeWriter(elem, text, i + 1, min, max);
        }, Math.random() * (max - min) + min);
    }else{
        wait = false;
    }
}
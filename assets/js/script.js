
var images = document.querySelectorAll(".imag");
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
function changePhotos(e) {
    var random = 1 + (getRandomInt(8));
    for (var i = 0; i < images.length; i++) {
        images[i].classList.remove("none");
        images[i].classList.remove("block");
    }
    var old = document.querySelector(".blue");
    if (old !== undefined) {
        old.classList.remove("blue");
    }
    if (e === ".Random") {
        for (var i = 0; i < random; i++) {
            images[i].src = "./assets/img/portfolio_photo" + random + ".png";
            random++;
            if (random === 9) {
                random = 0;
            }
        }
    }
    else if (e === ".Portraits") {
        images[1].src = "./assets/img/portfolio_photo8.png";
        images[2].src = "./assets/img/portfolio_photo7.png";
        images[6].classList += " none";
        images[7].classList += " none";
    }
    else if (e === ".Macro") {
        alert("ah");
    }
    else if (e === ".Panoramas") {
        alert(":(");
    }
    else {
        for (var i = 0; i < images.length; i++) {
            images[i].classList += " block";
        }
    }
    e = document.querySelector(e);
    e.classList += ' blue';
}
window.onload = function () {
    document.querySelector(".All").onclick = function () {
        changePhotos(".All");
    }
    document.querySelector(".Panoramas").onclick = function () {
        changePhotos(".Panoramas");
    }
    document.querySelector(".Portraits").onclick = function () {
        changePhotos(".Portraits");
    }
    document.querySelector(".Macro").onclick = function () {
        changePhotos(".Macro");
    }
    document.querySelector(".Random").onclick = function () {
        changePhotos(".Random");
    }
}
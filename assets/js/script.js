
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
    var old = document.querySelector(".menuborder");
    if (old !== null) {
        old.classList.remove("menuborder");
    }
    if (e === ".Random") {
        images[7].src = "./assets/img/portfolio_photo" + (1 + getRandomInt(8)) + ".png";
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
        for (var i = 4; i < images.length; i++) {
            images[i].classList += " none";
        }

    }
    else if (e === ".Panoramas") {
        for (var i = 0; i < images.length; i++) {
            images[i].classList += " none";
        }
        images[1].src = "./assets/img/portfolio_photo4.png";
        images[2].src = "./assets/img/portfolio_photo6.png";
        images[1].classList.remove("none");
        images[2].classList.remove("none");
    }
    else {
        for (var i = 0; i < images.length; i++) {
            images[i].classList += " block";
        }
    }
    e = document.querySelector(e);
    e.classList += ' menuborder';
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
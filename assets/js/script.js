
function changePhotos(e) {
    var old = document.querySelector(".blue");
    if (old !== undefined) {
        old.classList.remove("blue");
    }
    if (e === ".All") {
        alert("ok");
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
    document.querySelector(".Journal").onclick = function () {
        changePhotos(".Journal");
    }
}
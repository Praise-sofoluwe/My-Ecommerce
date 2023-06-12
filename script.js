const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
// const clearAll = document.querySelector('#clear-all')


// clearAll.addEventListener("click", () => {

//     localStorage.clear();
//     clearAll.classList.add("hidden");
//     location.reload()
// })

if (bar) {
    bar.addEventListener("click", () => {
        nav.classList.add("active");
    })
}

if (close) {
    close.addEventListener("click", () => {
        nav.classList.remove("active");
    })
}

// SProdct code for selection of the images
var MainImage = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");

smallImg[0].onclick = () => {
    MainImage.src = smallImg[0].src;
}

smallImg[1].onclick = function() {
    MainImage.src = smallImg[1].src;
}

smallImg[2].onclick = function() {
    MainImage.src = smallImg[2].src;
}

smallImg[3].onclick = function() {
    MainImage.src = smallImg[3].src;
}

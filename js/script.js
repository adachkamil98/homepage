console.log("Hello World! What's up?");

let button = document.querySelector(".js-button");
let body = document.querySelector(".js-body");
let optionalBackgroundColor = document.querySelector(".optionalBackgroundColor");
let themeName = document.querySelector(".js-themeName");

button.addEventListener("click", () => {
    body.classList.toggle("optionalBackgroundColor");

    themeName.innerText = body.classList.contains("optionalBackgroundColor") ? "jasny" : "ciemny";
});
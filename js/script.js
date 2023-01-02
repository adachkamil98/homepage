console.log("Hello! What's up?");

{
const button = document.querySelector(".js-button");
const body = document.querySelector(".js-body");
const themeName = document.querySelector(".js-themeName");

button.addEventListener("click", () => {
    body.classList.toggle("optionalBackgroundColor");

    themeName.innerText = body.classList.contains("optionalBackgroundColor") ? "jasny" : "ciemny";
});
}
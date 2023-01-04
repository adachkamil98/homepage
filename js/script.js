{
    const welcome = () => {
        console.log("Hello! What's up?")
    }

    const toggleBackground = () => {
        const body = document.querySelector(".js-body");
        const anotherThemeName = document.querySelector(".js-anotherThemeName");

        body.classList.toggle("body--brighter");
        anotherThemeName.innerText = body.classList.contains("body--brighter") ? "ciemny" : "jasny";
    }

    const init = () => {
        const changeBackgroundColorButton = document.querySelector(".js-changeBackgroundColorButton");

        changeBackgroundColorButton.addEventListener("click", toggleBackground);
    
    welcome();
    }
    
    init();
}
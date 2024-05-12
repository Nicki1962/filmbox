const btnMenu = document.querySelector("#menu-tlacitko");

const handleClick = () => {
    const btnItems = document.querySelector("#menu-polozky");
    btnItems.classList.toggle("show");
    const btnI = document.querySelector("i")
    if (btnI.classList.contains("fa-xmark")) {
        btnI.classList.remove("fa-xmark");
        btnI.classList.add("fa-bars");
    } else {
        btnI.classList.remove("fa-bars");
        btnI.classList.add("fa-xmark");
    }};


btnMenu.addEventListener("click", handleClick);

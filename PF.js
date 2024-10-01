const gnbOpener = document.querySelector("#gnb-opener");
const gnbMenu = document.querySelector(".gnb-menu");
const menu = document.querySelector(".menu");

gnbOpener.addEventListener("click", ()=> {
    gnbMenu.classList.toggle('show');
    menu.classList.toggle('show');
});

const searchOpener = document.querySelector("#search-opener");
const searchForm = document.querySelector(".search-form");

searchOpener.addEventListener("click", ()=> {
    searchForm.classList.toggle('show');
    if (searchForm.classList.contains('show')) {
        searchOpener.src = "src/x-icon.png";
    } else {
        searchOpener.src = "src/search-icon.png";
    }
});
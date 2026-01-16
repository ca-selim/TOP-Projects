import loadHomepage from "../pages/homepage.js";
import loadMenupage from "../pages/menu-page.js";

loadHomepage();

const mainContent = document.querySelector("#content");
const menu = document.querySelector("#menu");
const home = document.querySelector("#home");

function clearPage(){
    mainContent.innerHTML = '';
}

home.addEventListener("click", () => {
    clearPage();
    loadHomepage();
})

menu.addEventListener("click", () => {
    clearPage();
    loadMenupage();
})






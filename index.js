const hamburger = document.querySelector(".burger");
const navMenu = document.querySelector(".nav-menu");
const menuItem = document.querySelectorAll(".menu-item");

hamburger.addEventListener("click", openHamburgerMenu);
menuItem.forEach(item => item.addEventListener("click", closeMenu));

function openHamburgerMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

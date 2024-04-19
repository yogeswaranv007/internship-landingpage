const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");https://github.com/yogeswaranv007/internship-landingpage.git
hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());
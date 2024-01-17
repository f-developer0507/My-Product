// preloader js start
const preloader = document.querySelector(".preloader-wrapper");
window.onload = function () {
  preloader.classList.add("preloader-hidden");
  setInterval(function () {
    preloader.classList.add("preloader-hidden");
  }, 990);
};

// preloader js end

// dark mode js start
const darkMode = document.querySelector(".header__dark-mode");
const body = document.querySelector("body");

darkMode.addEventListener("click", function () {
  body.classList.toggle("dark");
});
// dark mode js end

// nav mobile js start
const burgerBtn = document.querySelector(".header__burger-btn");
const clouseBtn = document.querySelector(".header__clouse-btn");
const haederMobile = document.querySelector(".hader__nav");

burgerBtn.addEventListener("click", function () {
  haederMobile.classList.add("haeder__nav--mobile");
});

clouseBtn.addEventListener("click", function () {
  haederMobile.classList.remove("haeder__nav--mobile");
});
// nav mobile js end

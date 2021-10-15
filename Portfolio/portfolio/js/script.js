var menuToggle = document.getElementById("mh-menu-toggle-button");
var nav = document.querySelector("#nav");
menuToggle.addEventListener("click", function () {
    nav.classList.toggle("active");
});
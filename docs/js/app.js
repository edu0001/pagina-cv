const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

function changeText() {
  document.getElementById("user-title").innerHTML= "Hola, soy estudiante apacionado por la Fisica y la Programacion, mi nombre es "
  document.getElementById("user-value").innerHTML= "Martin A. Eduardo"
}
function changeText1() {
  document.getElementById("user-title").innerHTML= "Mi mail es "
  document.getElementById("user-value").innerHTML= "edukpo01@"
}
function changeText2() {
  document.getElementById("user-title").innerHTML= "Mi cumpleaños es "
  document.getElementById("user-value").innerHTML= "21/01/1996"
}
function changeText3() {
  document.getElementById("user-title").innerHTML= "Mi direccion es "
  document.getElementById("user-value").innerHTML= "Belgrano 589- El Manantial"
}
function changeText4() {
  document.getElementById("user-title").innerHTML= "Mi telefono es "
  document.getElementById("user-value").innerHTML= "(381)-3155881"
}
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
  });


});
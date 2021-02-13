const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("list");
const body = document.getElementById("body");
const dim = document.getElementById("darkLayer")
let first = true
//show menu
const showMenu = () => {
  menu.style.display = "flex";
  menu.style.right = "0";
  body.style.overflow = "hidden";
  dimOn();
};
//hide menu
const hideMenu = () => {
  menu.style.right = "-100%";
  body.style.overflow = "auto";
  dimOff();
};
const dimOff = () => {
  document.getElementById("darkLayer").style.display = "none";
};
const dimOn = () => {
  document.getElementById("darkLayer").style.display = "";
};
hamburger.addEventListener("click", (e) => {
  e.preventDefault();
  hamburger.firstChild.classList.toggle("fa-bars");
  hamburger.firstChild.classList.toggle("fa-times");
  if (menu.style.right === "-100%" || first) {
    showMenu();
  } else {
    hideMenu();
  }
  first = false
});
dim.addEventListener('click',()=>{
    hideMenu()
})
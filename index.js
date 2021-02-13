const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("list");
const body = document.getElementById("body");
const dim = document.getElementById("darkLayer")
let first = true
//show menu
const showMenu = () => {
  menu.style.display = "flex";
  menu.style.top = "80px";
  body.style.overflow = "hidden";
  dimOn();
};
//hide menu
const hideMenu = () => {
  menu.style.top = "-100%";
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
  if (menu.style.top === "-100%" || first) {
    showMenu();
  } else {
    hideMenu();
  }
  first = false
});
dim.addEventListener('click',()=>{
    hideMenu()
})
const input = document.getElementById("help-input");
const close = document.getElementById("close-icon");
const searchResult = document.getElementById("search-outcome");
const resBox = document.getElementById("search-res");
// opening and closing of second secion on low width scrreens
let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
// updates width varaible
window.addEventListener("resize", () => {
  width = window.innerWidth > 0 ? window.innerWidth : screen.width;
});
close.style.display = "none";
input.addEventListener("input", (e) => {
  if (input.value == "") {
    //hidesdddas
    close.style.display = "none";
    searchResult.innerText = "";
    resBox.classList = "";
  } else {
    close.style.display = "flex";
    searchResult.innerText = "Brak wyników. Zmień kryteria wyszukiwania.";
    resBox.classList = "help-search-results";
    //show sth
  }
  console.log(input.value);
});

const clearInput = () => {
  input.value = "";
  close.style.display = "none";
  searchResult.innerText = "";
  resBox.classList = "";
};

close.addEventListener("click", clearInput);
const headers = document.getElementsByClassName("help-category-name");
const lists = document.getElementsByClassName("help-category-list-container")

const toggleList = (header) =>{
  const div = header.nextElementSibling
  div.classList.toggle('help-category-list-container-on')
  const arrow = header.firstElementChild 
  arrow.classList.toggle('fa-arrow-down')
}

// kaxdy ma przypisany eventListener 
for(let i =0;i<headers.length;i++){
  headers[i].addEventListener('click',()=>{
    toggleList(headers[i])
  })
}

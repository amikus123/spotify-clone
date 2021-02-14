const topBar = document.getElementById('topBar') 
const navs = document.getElementsByClassName("nav-link")
window.addEventListener('scroll',()=>{
    let scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    console.log(scrollTop)
    if(scrollTop>=20){
        topBar.style = "background-color: rgba(0, 0, 0, 0.6);"
        for(let i=0;i<navs.length;i++){
            navs[i].classList = "premium-nav-ligth nav-link"
        }
    }else{
        topBar.style = "background-color: rgb(29, 117, 222)"
        for(let i=0;i<navs.length;i++){
            navs[i].classList = "premium-nav nav-link"
        }
    }
    
})
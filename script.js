const menu =  document.querySelector(".menu-icon");
const sideBar =  document.querySelector(".side-bar");
const CloseIcon = document.querySelector(".closeIcon");


menu.addEventListener("click",() => {
    // sideBar.classList.toggle("show-sideBar")
    // OR 
    if(sideBar.classList.contains("show-sideBar")){
        sideBar.classList.remove("show-sideBar") 
    } else{
        sideBar.classList.add("show-sideBar")
    }
})

CloseIcon.addEventListener("click", () => {
    // sideBar.classList = "side-bar";
    // OR
    sideBar.classList.remove("show-sideBar");
})

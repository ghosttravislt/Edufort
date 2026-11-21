 const menu = document.querySelector(".menu-toggle");
 const navLink = document.querySelector(".navlink");
 const close = document.querySelector(".close")

 menu.addEventListener("click",()=>{
    navLink.classList.toggle("active");
    navLink.style.transition ="all 0.5s";
 })



 close.addEventListener("click",()=>{
    navLink.classList.remove("active");
    navLink.style.transition ="all 0.5s";
 })


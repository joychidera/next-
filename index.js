const navbarEI = document.querySelector(".navbar");


const bottoncontainerEI = document.querySelector(".botton-container")

console.log(navbarEI.offsetHeight);

console.log(bottoncontainerEI.offsetTop);

window.addEventListener("scroll",()=>{
  if(window.scrollY >
    bottoncontainerEI.offsetTop-navbarEI.offsetHeight-50){
      navbarEI.classList.add("active")
    }else{
      navbarEI.classList.remove("active")
    }
  });
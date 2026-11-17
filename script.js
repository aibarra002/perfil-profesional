const menuBtn=document.querySelector("#menuBtn");
const navMenu=document.querySelector("#navMenu");
menuBtn.addEventListener("click",()=>{const open=navMenu.classList.toggle("open");menuBtn.setAttribute("aria-expanded",String(open));menuBtn.textContent=open?"×":"☰";});
navMenu.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{navMenu.classList.remove("open");menuBtn.setAttribute("aria-expanded","false");menuBtn.textContent="☰";}));
document.querySelector("#year").textContent=new Date().getFullYear();
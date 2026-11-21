const menuButton=document.querySelector(".menu");
const navigation=document.querySelector(".nav");
if(menuButton&&navigation){
  menuButton.addEventListener("click",()=>{
    const open=navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded",String(open));
    menuButton.setAttribute("aria-label",open?"Close navigation":"Open navigation");
  });
  navigation.querySelectorAll("a").forEach(link=>link.addEventListener("click",()=>{
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded","false");
    menuButton.setAttribute("aria-label","Open navigation");
  }));
}
const year=document.querySelector("#year");
if(year) year.textContent=new Date().getFullYear();
const items=document.querySelectorAll(".about-grid,.skills article,.project,.contact-inner");
items.forEach(item=>item.classList.add("reveal"));
if("IntersectionObserver" in window){
  const observer=new IntersectionObserver((entries,obs)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add("visible");obs.unobserve(entry.target);}
    });
  },{threshold:.12});
  items.forEach(item=>observer.observe(item));
}else{items.forEach(item=>item.classList.add("visible"));}
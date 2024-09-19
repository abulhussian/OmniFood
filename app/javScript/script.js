const yearEl=document.querySelector(".year");
const currentYear=new  Date().getFullYear();
console.log(currentYear)
yearEl.textContent=currentYear;

// //////////////////////////////////////////////////
// Make mobile navigation work


const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click",function () {
    headerEl.classList.toggle("nav-open");
    
});

// /////////////////////////////////
// Smooth scrolling in safari

const allLinks = document.querySelector('a:link');

allLinks.forEach(function(link) {
    link.addEventListener('click',function(e){
        e.preventDefault();
        const href=link.getAttribute("href");
        // Scroll back to top
        if (href==="#") window.scrollTo({
            top:0,
            behaviour:"smooth",
        });
        //Scroll toother links
        if (href !== "#" && href.startsWith('#')) {
            const sectionEl=document.querySelector(href)
            // console.log(sectionEl)
            sectionEl.scrollIntoView({ behaviour:"smooth"});
        }
        
            // console.log(href)
    });   ///close to toher links
        if (link.classList.contains("main-nav-link"))
            headerEl.classList.toggle("nav-open");
});

// /////////////////////////////////////////
//sticky navigation
const sectionHeroEl =document.querySelector(".section-hero");
const obs = new IntersectionObserver(function(entries){
    const ent=entries(0);
    console.log(ent);
    if(ent.isIntersecting === false){
      document.body.classList.add('sticky');
    }
    if(ent.isIntersecting === true){
      document.body.classList.add('sticky');
    }
            
    } ,
{
   //In the view pirt 
    root:null,
    threshold:0,
    rootMargin:'-80px',
})
obs.observer(sectionHeroEl);


//https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js


///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";
  
    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));
  
    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);
  
    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }
  checkFlexGap();
  

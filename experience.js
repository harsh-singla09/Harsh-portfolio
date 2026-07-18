/* =====================================================
   EXPERIENCE PAGE JAVASCRIPT
   Author : Harsh Singla Portfolio
===================================================== */

// ===============================
// ACTIVE NAVBAR
// ===============================

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    if(link.getAttribute("href")==="experience.html"){

        link.classList.add("active");

    }else{

        link.classList.remove("active");

    }

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(

".hero, .section-title, .timeline-item"

);

function revealOnScroll(){

    const windowHeight = window.innerHeight;

    revealElements.forEach((element)=>{

        const top = element.getBoundingClientRect().top;

        if(top < windowHeight - 120){

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

window.addEventListener("load", revealOnScroll);


// ===============================
// BACK TO TOP BUTTON
// ===============================

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        backToTop.style.opacity="1";

        backToTop.style.visibility="visible";

    }

    else{

        backToTop.style.opacity="0";

        backToTop.style.visibility="hidden";

    }

});


backToTop.addEventListener("click",(e)=>{

    e.preventDefault();

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// ===============================
// TIMELINE CARD ANIMATION
// ===============================

const cards=document.querySelectorAll(".timeline-content");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0px) scale(1)";

});

});


// ===============================
// ICON ROTATION
// ===============================

const icons=document.querySelectorAll(".icon");

icons.forEach(icon=>{

icon.addEventListener("mouseenter",()=>{

icon.style.transform="rotate(15deg) scale(1.1)";

icon.style.transition=".4s";

});

icon.addEventListener("mouseleave",()=>{

icon.style.transform="rotate(0deg) scale(1)";

});

});


// ===============================
// TAG HOVER EFFECT
// ===============================

const tags=document.querySelectorAll(".tags span");

tags.forEach(tag=>{

tag.addEventListener("mouseenter",()=>{

tag.style.transform="translateY(-4px)";

});

tag.addEventListener("mouseleave",()=>{

tag.style.transform="translateY(0px)";

});

});


// ===============================
// TYPEWRITER HERO EFFECT
// ===============================

const title=document.querySelector(".hero h1");

const originalText=title.innerText;

title.innerHTML="";

let i=0;

function typing(){

if(i<originalText.length){

title.innerHTML+=originalText.charAt(i);

i++;

setTimeout(typing,60);

}

}

window.addEventListener("load",typing);


// ===============================
// FADE IN EXPERIENCE CARDS
// ===============================

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

},

{

threshold:.2

}

);

document.querySelectorAll(".timeline-item").forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(80px)";

item.style.transition=".8s ease";

observer.observe(item);

});


// ===============================
// PARALLAX HERO
// ===============================

window.addEventListener("scroll",()=>{

const hero=document.querySelector(".hero");

let offset=window.pageYOffset;

hero.style.backgroundPositionY=offset*0.4+"px";

});


// ===============================
// CONSOLE MESSAGE 😎
// ===============================

console.log(

"%cDesigned & Developed by Harsh Singla",

"color:#98FF98;font-size:18px;font-weight:bold;"

);
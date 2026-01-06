gsap.registerPlugin(ScrollTrigger);

// Variables for Header
const header = document.querySelector(".intro");
const toggleBtn = document.querySelector(".toggle-btn");
const toggleIcon = document.querySelector(".toggleIcon");
const sidebar = document.querySelector(".sidebar");
const sidebar_btn = document.querySelectorAll("#sidebar-btn");
var sidebar_active = false;
// Variables for Hero section
const main_box = document.querySelector(".home-box");
// Variables for About me section
const port_img = document.querySelector(".img-box");
const projects = document.querySelector(".projects");
const textBox_1 = document.querySelector(".textBox-1");
const videoBox_1 = document.querySelector(".videoBox-1");
const textBox_2 = document.querySelector(".textBox-2");
const videoBox_2 = document.querySelector(".videoBox-2");

const menuTween = gsap.to(toggleIcon, {rotation:180, duration:1, repeat: 0});

// Nav bar hidding script
var lastScrollTop = 0;

window.addEventListener("scroll",()=>{
    var scrollVal = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollVal > lastScrollTop){
        if(!sidebar_active){
            // header.classList.add("nav-hide");
            // console.log("scroll down");
            header.style.transform = "translateY(-16vh)";

        }
    }else if(scrollVal < lastScrollTop){
            // header.style.marginTop = "0";
            header.style.transform = "translateY(0)";

        // console.log("scroll up");
    }
    
    lastScrollTop = scrollVal <= 0? 0:scrollVal;
});

// Hero section ScrollTrigger animation
gsap.to(main_box, {
    scrollTrigger:{
        trigger: main_box,
        start: "96% 100%",
        end: "bottom 40%",
        pin: true,
        scrub: true,
    },
    scale: 0.7,
    opacity: 0
});

// About me scroll trigger
gsap.from(port_img, {
    scrollTrigger:{
        trigger:".about-me",
        start: "top top",
        end: "bottom top",
        scrub:true,
        pin:true,
        // markers: true
    },
    xPercent:-100,

})

// Project I animation
// Pro-I text
gsap.from(textBox_1, {
    scrollTrigger:{
        trigger: ".pro-1",
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
        
    },
    xPercent: -100,
    delay: 1
});
// Pro-I Video
gsap.from(videoBox_1, {
    scrollTrigger:{
        trigger: ".pro-1",
        start: "top top",
        end: "bottom -40",
        scrub: true,
    },
    xPercent: 120
});

// Project II animation
// Pro-II text
gsap.from(textBox_2, {
    scrollTrigger:{
        trigger: ".pro-2",
        start: "top top",
        end: "bottom -20",
        scrub: true,
        pin: true
    },
    xPercent: 100
});
// Pro-II Video
gsap.from(videoBox_2, {
    scrollTrigger:{
        trigger: ".pro-2",
        start: "top top",
        end: "bottom -20",
        scrub: true,
    },
    xPercent: -120
});


// Menu bar toggle button 
function toggle_click(){
    sidebar.classList.toggle("active");
    sidebar_btn.forEach((element, index) => {
        setTimeout(()=>{
            element.classList.toggle("animate__slideInUp");
            element.style.visibility = "visible";
        }, index * 100);
    });

    if(toggleIcon.getAttribute("src") === "images/menu-svgrepo-com.svg"){
        toggleIcon.setAttribute("src","images/cancel-svgrepo-com (white).svg");  
        menuTween.restart();
    // Sidebar active status
        sidebar_active = true;

        sidebar_btn.forEach((element)=>{
            element.style.visibility = "hidden";
        });

    }else{
        toggleIcon.setAttribute("src","images/menu-svgrepo-com.svg");
    // Sidebar active status
        sidebar_active = false;
    };
};  

toggleBtn.addEventListener("click", toggle_click);

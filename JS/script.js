gsap.registerPlugin(ScrollTrigger);


const toggleBtn = document.querySelector(".toggle-btn");
const toggleIcon = document.querySelector(".toggleIcon");
const sidebar = document.querySelector(".sidebar");
const sidebar_btn = document.querySelectorAll("#sidebar-btn");
const main_box = document.querySelector(".about-box");
const projects = document.querySelector(".projects");
const textBox_1 = document.querySelector(".textBox-1");
const videoBox_1 = document.querySelector(".videoBox-1");
const textBox_2 = document.querySelector(".textBox-2");
const videoBox_2 = document.querySelector(".videoBox-2");

const menuTween = gsap.to(toggleIcon, {rotation:180, duration:1, repeat: 0});

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
        }, index * 100);
    });

    if(toggleIcon.getAttribute("src") === "/images/menu-svgrepo-com.svg"){
        toggleIcon.setAttribute("src","/images/cancel-svgrepo-com (white).svg");  
        menuTween.restart();

    }else{
        toggleIcon.setAttribute("src","/images/menu-svgrepo-com.svg");
    };
};  

toggleBtn.addEventListener("click", toggle_click);

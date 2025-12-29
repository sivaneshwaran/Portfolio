
// Elements
const menubarList = document.querySelector(".menuBar-list");
const menu_btn = document.querySelector(".menu-btn");
const toggleBtn = document.querySelector(".toggle-btn");
const toggleIcon = document.querySelector(".toggleIcon");
const sidebar = document.querySelector(".sidebar");
const sidebar_btn = document.querySelectorAll("#sidebar-btn");
const about = document.querySelector(".f_name");

// Animation elements
const menuTween = gsap.to(toggleIcon, {rotation:180, duration:1, repeat: 0});

// Menu bar toggle button 
function toggle_click(){
    sidebar.classList.toggle("active");

    sidebar_btn.forEach((element, index) => {
        setTimeout(()=>{
            element.classList.toggle("animate__slideInUp");
        }, index * 100);
    });

    if(toggleIcon.getAttribute("src") === "/IMAGES/menu-svgrepo-com.svg"){
        toggleIcon.setAttribute("src","/IMAGES/cancel-svgrepo-com (white).svg");  
        menuTween.restart();

    }else{
        toggleIcon.setAttribute("src","/IMAGES/menu-svgrepo-com.svg");
    };
};    

toggleBtn.addEventListener("onclick", toggle_click());

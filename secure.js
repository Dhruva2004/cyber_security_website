new Swiper('.imgscroll', {
    // Optional parameters
    loop: true,
    spacebetween: 30,

    // pagination bullets
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakppoints: {
        0: {
            slidePerView: 1
        },
        768: {
            slidePerView: 2
        },
        1024: {
            slidePerView: 3
        },
    }
});


function openNav() {
    document.getElementById("mySidebar").style.width = "350px";
    document.querySelector('.main_container').style.opacity = "70%";
    document.querySelector('.main_header').style.opacity = "70%";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.querySelector('.main_container').style.opacity = "100%";
    document.querySelector('.main_header').style.opacity = "100%";
}
function main_container2() {
    document.getElementById("mySidebar").style.width = "0";
    document.querySelector('.main_container').style.opacity = "100%";
    document.querySelector('.main_header').style.opacity = "100%";
}




function scrollToSection(event, sectionId) {
    event.preventDefault();
    let section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav_bar a");

    function changeActiveLink() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", changeActiveLink);
});
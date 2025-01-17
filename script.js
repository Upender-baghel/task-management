

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    const link = document.querySelectorAll(".nav-links a");
    link.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault(); 
            const targetId = link.getAttribute("href").substring(1); 
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        });
    });

    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
        let currentSectionId = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 70; 
            if (window.scrollY >= sectionTop) {
                currentSectionId = section.getAttribute("id");
            }
        });

        links.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSectionId) {
                link.classList.add("active");
            }
        });
    });
});
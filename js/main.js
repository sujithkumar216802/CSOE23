const menuToggle = document.getElementById("menu-toggle");
const menuContainer = document.getElementsByClassName("menu-button-container")[0];
const nav = document.getElementsByTagName("nav");
const navLinks = nav[0].getElementsByTagName("a");

const ids = ['home', 'about', 'skills', 'resume', 'projects', 'contact'];

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].onclick = () => {
        let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        if (menuToggle.checked || w > 480) {
            menuToggle.checked = false;
            document.getElementById(ids[i]).scrollIntoView({
                behavior: 'smooth'
            });
        }
    }
}

const home = document.getElementById("home");
const navbar = document.getElementsByTagName("nav")[0];
window.onscroll = () => {
    menuToggle.checked = false;
    if (window.scrollY > home.clientHeight) {
        navbar.classList.add('nav-scrolled');
    } else {
        navbar.classList.remove('nav-scrolled');
    }
};

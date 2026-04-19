const items = document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {
    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight - 100) {
            item.classList.add("show");
        }
    });
});



// Toggle Menu
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navLinks");

toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Scroll Effect
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".custom-navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});







const toggleBtn = document.getElementById("darkToggle");

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    // Change icon
    if (document.body.classList.contains("light-mode")) {
        toggleBtn.textContent = "☀️";

        document.querySelector('#h1').style.color = 'black';
        document.querySelector('#hero-p').style.color = 'black';

        document.querySelector('#about-text').style.color = 'black';

        document.querySelector('#skill').style.color = 'black';
        document.querySelector('#timeline').style.color = 'black';
        document.querySelector('#partner').style.color = 'black';

        document.querySelector('#p-contact').style.color = 'black';
        document.querySelector('#h2-contact').style.color = 'black';

        document.querySelector('.btn-outline-light').style.backgroundColor = "orange";
        document.querySelectorAll('.tech-card')[1].style.border = "1px solid black";
        document.querySelectorAll('.tech-card')[0].style.border = "1px solid black";
        document.querySelectorAll('.tech-card')[2].style.border = "1px solid black";
        document.querySelectorAll('.tech-card')[3].style.border = "1px solid black";
        document.querySelectorAll('.tech-card')[4].style.border = "1px solid black";
        document.querySelectorAll('.tech-card')[5].style.border = "1px solid black";

        document.querySelectorAll('.tech-card')[1].style.color = "black";
        document.querySelectorAll('.tech-card')[0].style.color = "black";
        document.querySelectorAll('.tech-card')[2].style.color = "black";
        document.querySelectorAll('.tech-card')[3].style.color = "black";
        document.querySelectorAll('.tech-card')[4].style.color = "black";
        document.querySelectorAll('.tech-card')[5].style.color = "black";
        document.querySelector('.timeline').style.color = "black";

        document.querySelector('.partner').style.color = "black";
        document.querySelector('.partner-card').style.color = 'white'
        document.body.style.color = 'green';


    } else {
        toggleBtn.textContent = "🌙";
        document.querySelector('.btn-outline-light').style.backgroundColor = "";
        document.querySelector('#h1').style.color = 'white';
        document.querySelector('#hero-p').style.color = 'white';

        document.querySelector('#about-text').style.color = 'white';

        document.querySelector('#skill').style.color = 'white';
        document.querySelector('#timeline').style.color = 'white';
        document.querySelector('#partner').style.color = 'white';

        document.querySelector('#p-contact').style.color = 'white';
        document.querySelector('#h2-contact').style.color = 'white';


        document.querySelectorAll('.tech-card')[1].style.color = "white";
        document.querySelectorAll('.tech-card')[0].style.color = "white";
        document.querySelectorAll('.tech-card')[2].style.color = "white";
        document.querySelectorAll('.tech-card')[3].style.color = "white";
        document.querySelectorAll('.tech-card')[4].style.color = "white";
        document.querySelectorAll('.tech-card')[5].style.color = "white";

    }
});

document.getElementById('projects').addEventListener('click', () => {
    alert('working on it! as soon as possible will upload project!')
    console.log('poject')
})
// Sticky navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle('active');
};
window.onscroll = () => {
    navbar.classList.remove('active');
};

// Darkmode toggle
let darkmode = document.querySelector('#darkmode');

// Check for saved dark mode preference in localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
    enableDarkMode();
}

darkmode.onclick = () => {
    if (document.body.classList.contains('active')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
};

function enableDarkMode() {
    // Change icon and enable dark mode
    darkmode.innerHTML = '🌞'; // sun icon for light mode toggle
    document.body.classList.add('active');
    localStorage.setItem('darkMode', 'enabled'); // save preference
}

function disableDarkMode() {
    // Change icon and disable dark mode
    darkmode.innerHTML = '🌙'; // moon icon for dark mode toggle
    document.body.classList.remove('active');
    localStorage.setItem('darkMode', 'disabled'); // save preference
}


document.querySelector(".scroll-down a").onclick = () => {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth",
  });
};
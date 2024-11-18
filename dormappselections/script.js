let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let darkModeToggle = document.querySelector("#darkmode-btn"); // Assuming you have a button or element with id="darkmode"

// Toggle navbar visibility on menu icon click
menu.onclick = () => {
  navbar.classList.toggle("active");
};

// Remove the 'active' class when the user scrolls
window.onscroll = () => {
  if (window.scrollY > 50) {
    navbar.classList.remove("active");
  }
};

// Check user's preferred color scheme from system or localStorage
function applyDarkModePreference() {
  const isDarkMode = localStorage.getItem('dark-mode') === 'enabled';
  
  if (isDarkMode || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.style.setProperty('--bg-color', '#181818');
    document.documentElement.style.setProperty('--text-color', '#ffffff');
    document.documentElement.style.setProperty('--main-color', '#1e8e34');
  } else {
    document.documentElement.style.setProperty('--bg-color', '#edecea');
    document.documentElement.style.setProperty('--text-color', '#000000');
    document.documentElement.style.setProperty('--main-color', '#83b735');
  }
}

// Dark mode toggle functionality
darkModeToggle.onclick = () => {
  const currentMode = document.documentElement.style.getPropertyValue('--bg-color');
  if (currentMode === '#181818') {
    // Switch to light mode
    document.documentElement.style.setProperty('--bg-color', '#edecea');
    document.documentElement.style.setProperty('--text-color', '#000000');
    document.documentElement.style.setProperty('--main-color', '#83b735');
    localStorage.setItem('dark-mode', 'disabled');
  } else {
    // Switch to dark mode
    document.documentElement.style.setProperty('--bg-color', '#181818');
    document.documentElement.style.setProperty('--text-color', '#ffffff');
    document.documentElement.style.setProperty('--main-color', '#1e8e34');
    localStorage.setItem('dark-mode', 'enabled');
  }
};

// Apply dark mode based on user preference or system setting when the page loads
applyDarkModePreference();

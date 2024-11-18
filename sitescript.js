let menu = document.querySelector("#menu-icon");
let sidenavbar = document.querySelector(".side-navbar");
let content = document.querySelector(".content");

// Initially hide the sidebar by adding the 'active' class
sidenavbar.classList.add("active");
content.classList.add("active");

// Toggle sidebar on menu icon click
menu.onclick = (event) => {
  event.stopPropagation(); // Prevents click on the menu icon from closing the sidebar immediately
  sidenavbar.classList.toggle("active");
  content.classList.toggle("active");
};

// Close sidebar if clicking outside of it
document.addEventListener("click", (event) => {
  if (!sidenavbar.contains(event.target) && !menu.contains(event.target)) {
    sidenavbar.classList.add("active"); // Ensures the sidebar is closed
    content.classList.add("active");
  }
});

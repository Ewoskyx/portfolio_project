const toggleIcon = document.getElementById("toggleIcon");
const toggleElement = document.getElementById("dropdownClick");
window.addEventListener("resize", resizeMobileMenu);

function toggle() {
  toggleElement.classList.toggle("hamburger");
  if (toggleIcon.className === "fas fa-bars") {
    toggleIcon.className = "fa fa-times";
  } else {
    toggleIcon.className = "fas fa-bars";
  }
}

function toggleOff() {
  if (toggleElement.className === "desktop-menu hamburger" || window.innerWidth >= 992) {
    toggleElement.classList.remove("hamburger");
    toggleIcon.className = "fas fa-bars";
  } else {
    toggleElement.className = "desktop-menu";
  }
}

function resizeMobileMenu() {
  if (window.innerWidth >= 992) {
    toggleElement.classList.remove("hamburger");
    toggleIcon.className = "fas fa-bars";
  }
}

toggle();
toggleOff();
resizeMobileMenu();

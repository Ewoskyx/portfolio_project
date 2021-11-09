const toggleIcon = document.getElementById('toggleIcon');
const toggleElement = document.getElementById('dropdownClick');

function toggle() {
  toggleElement.classList.toggle('hamburger');
  if (toggleIcon.className === 'fas fa-bars') {
    toggleIcon.className = 'fa fa-times';
  } else {
    toggleIcon.className = 'fas fa-bars';
  }
}

function toggleOff() {
  if (
    toggleElement.className === 'desktop-menu hamburger') {
    toggleElement.classList.remove('hamburger');
    toggleIcon.className = 'fas fa-bars';
  } else {
    toggleElement.className = 'desktop-menu';
  }
}

function resizeMobileMenu() {
  if (window.innerWidth >= 992) {
    toggleElement.classList.remove('hamburger');
    toggleIcon.className = 'fas fa-bars';
  }
}
window.addEventListener('resize', resizeMobileMenu);
toggle();
toggleOff();
resizeMobileMenu();

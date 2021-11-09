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

toggle();
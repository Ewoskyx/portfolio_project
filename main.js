import objArr from './data.js';

const toggleIcon = document.getElementById('toggleIcon');
const toggleElement = document.getElementById('dropdownClick');
const popDiv = document.getElementById('pop-div');
const seeProject = document.getElementById('btn-pop');
const navElements = document.querySelectorAll('a.nav-a');

/* Toggle the collapse */
function toggle() {
  toggleElement.classList.toggle('hamburger');
  if (toggleIcon.className === 'fas fa-bars') {
    toggleIcon.className = 'fa fa-times';
  } else {
    toggleIcon.className = 'fas fa-bars';
  }
}
toggleIcon.addEventListener('click', toggle);

/* Closing the collapse onclick of links */
function toggleOff() {
  if (toggleElement.className === 'desktop-menu hamburger') {
    toggleElement.classList.remove('hamburger');
    toggleIcon.className = 'fas fa-bars';
  } else {
    toggleElement.className = 'desktop-menu';
  }
}

navElements.forEach((e) => {
  e.addEventListener('click', toggleOff);
});

/* Closing the collapse on resize */
function resizeMobileMenu() {
  if (window.innerWidth >= 992) {
    toggleElement.classList.remove('hamburger');
    toggleIcon.className = 'fas fa-bars';
  }
}
window.addEventListener('resize', resizeMobileMenu);

const [
  {
    title,
    tech1,
    tech2,
    tech3,
    featuredImg,
    description,
    live,
    source,
    icon1,
    icon2,
  },
] = objArr;

/* Modal template */
const popTheProject = `
<div class="popup-wrapper active" id="popup-id">
  <div class="popup-top">
   <h2 id="modal-title">${title}</h2>
   <button id="pop-close" class="pop-close">&times</button>
  </div>
  <div class="popup-techs">
    <ul>
      <li class="pop-li">${tech1}</li>
      <li class="pop-li">${tech2}</li>
      <li class="pop-li">${tech3}</li>
    </ul>
  </div>
  <div class="popup-center">
    <div class="center-left">
      <img class="pop-img" src="${featuredImg}">
    </div>
    <div class="center-right">
     <p>${description}</p>
     <div class="pop-btn-div">
      <button class="pop-btn" type="button">${live}<span><img src="${icon2}" alt="..."></span></button>
      <button class="pop-btn" type="button">${source}<span><img src="${icon1}" alt="..."></button>
     </div>
    </div>
  </div>
</div>
<div class="active" id="overlay"></div>
`;

/* Adding the modal */
function addPopup() {
  const popup = document.getElementById('popup-id');
  const overlay = document.getElementById('overlay');
  if (typeof popup !== 'undefined' && popup != null) {
    popup.classList.add('active');
    overlay.classList.add('active');
  } else {
    popDiv.insertAdjacentHTML('beforeend', popTheProject);
  }
}

seeProject.addEventListener('click', addPopup);

/* Closing the modal */
document.body.addEventListener('click', (e) => {
  if (e.target.id === 'pop-close') {
    const modal = document.getElementById('popup-id');
    const overlay = document.getElementById('overlay');
    modal.classList.remove('active');
    overlay.classList.remove('active');
  }
});
/* Change modal title on mobile */
function modalMobileTitle() {
  const modalTitle = document.getElementById('modal-title');
  if (window.innerWidth < 992) {
    modalTitle.innerHTML = 'Multi-Post Stories';
  } else {
    modalTitle.innerHTML = 'Keeping track of hundreds of components website';
  }
}
window.addEventListener('resize', modalMobileTitle);

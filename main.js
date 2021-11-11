import objArr from './data.js';

const toggleIcon = document.getElementById('toggleIcon');
const toggleElement = document.getElementById('dropdownClick');
const popDiv = document.getElementById('pop-div');
const seeProject = document.querySelectorAll('button.btn-pop');
const navElements = document.querySelectorAll('a.nav-a');
const form = document.getElementById('submit');
const name = document.getElementById('name');
const mail = document.getElementById('email');
const msg = document.getElementById('text-field');

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
      <a class="pop-btn" href="https://ewoskyx.github.io/portfolio_project/" target="_blank">${live}<span><img src="${icon2}" alt="..."></span></a>
      <a class="pop-btn" href="https://github.com/Ewoskyx/portfolio_project" target="_blank">${source}<span><img src="${icon1}" alt="..."></a>
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

seeProject.forEach((e) => {
  e.addEventListener('click', addPopup);
});

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
  if (modalTitle !== null) {
    if (window.innerWidth < 992) {
      modalTitle.innerHTML = 'Multi-Post Stories';
    } else {
      modalTitle.innerHTML = `${title}`;
    }
  }
}
window.addEventListener('resize', modalMobileTitle);
/* Validating the e-mail for lowercase */
/* Display the message */
function displayMessage(mailInput, message, type) {
  const msg = document.getElementById('small');
  msg.innerText = message;
  mailInput.className = type ? 'success' : 'error';
}
/* Show Error */
function showError(mailInput, msg) {
  return displayMessage(mailInput, msg, false);
}
/* Validate */
function validateMail(mailInput, msg) {
  const toLowerRegex = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
  const email = mailInput.value.trim();
  if (!toLowerRegex.test(email)) {
    return showError(mailInput, msg);
  }
  return true;
}
/* Add local storage */
const userArr = [];

function addUser() {
  const user = {
    nameValue: name.value,
    mailValue: mail.value,
    msgValue: msg.value,
  };
  userArr.push(user);
  localStorage.setItem('UserList', JSON.stringify(userArr));
}
function getUser() {
  let data = localStorage.getItem('UserList');
  data = JSON.parse(data);
  const lastUser = data[data.length - 1];
  name.value = lastUser.nameValue;
  mail.value = lastUser.mailValue;
  msg.value = lastUser.msgValue;
}
const EMAIL_UPPER = 'Email field can not contain upper case characters!';
/* Event listner for email input */
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValid = validateMail(form.elements.email, EMAIL_UPPER);
  if (emailValid) {
    addUser();
    form.submit();
    form.reset();
  }
});
getUser();
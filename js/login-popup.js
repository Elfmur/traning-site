let loginButton = document.querySelector('.login-botton');
let loginPopup = document.querySelector('.login-popup');

loginButton.addEventListener('click', showPopup);

function showPopup (e){
  e.preventDefault();
  loginPopup.classList.toggle("show-popup");
}

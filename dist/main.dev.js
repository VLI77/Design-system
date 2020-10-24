"use strict";

var button_register = document.querySelector('.register-nav');
var button_login = document.querySelector('.login-nav');
var border = document.querySelector('.login-nav');
var login = document.querySelector('.login');
var register = document.querySelector('.register');
button_register.addEventListener("click", change);
button_login.addEventListener("click", change2);
var state = new Boolean();

function change() {
  if (state == false) {
    state = true;
    login.style.display = "none";
    register.style.display = "block";
    button_register.style.borderBottom = "3px solid #DB8A74";
    button_register.style.color = "#DB8A74";
    button_login.style.color = "#4A4E69";
    button_login.style.borderBottom = "none";
  }
}

function change2() {
  if (state == true) {
    state = false;
    login.style.display = "block";
    register.style.display = "none";
    button_login.style.borderBottom = "3px solid #DB8A74";
    button_login.style.color = "#DB8A74";
    button_register.style.color = "#4A4E69";
    button_register.style.borderBottom = "none";
  }
}
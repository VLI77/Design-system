let button_register = document.querySelector('.register-nav')
let button_login = document.querySelector('.login-nav')
let border = document.querySelector('.login-nav')
let login = document.querySelector('.login')
let register = document.querySelector('.register')
button_register.addEventListener("click",change)
button_login.addEventListener("click",change2)

let state = new Boolean

 function change(){
    if(state == false){
        state = true
        login.style.display = "none";
        register.style.display = "block";
        button_register.style.borderBottom = "3px solid #DB8A74"
        button_register.style.color = "#DB8A74"
        button_login.style.color = "#4A4E69"
        button_login.style.borderBottom = "none"
    }
}

function change2(){
     if (state == true){
        state = false
        login.style.display = "block";
        register.style.display = "none"; 
        button_login.style.borderBottom = "3px solid #DB8A74"
        button_login.style.color = "#DB8A74"
        button_register.style.color = "#4A4E69"
        button_register.style.borderBottom = "none"
    }
}


$(function() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    $("html, body").css({"width":w,"height":h});
});
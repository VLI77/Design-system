let button_register = document.querySelector('.register-nav')
let button_login = document.querySelector('.login-nav')
let border = document.querySelector('.login-nav')
let login = document.querySelector('.login')
let register = document.querySelector('.register')
button_register.addEventListener("click",change)
button_login.addEventListener("click",change2)

let icon_login = document.querySelector('.icon-password-login')
let icon_register = document.querySelector('.icon-password-register')
let state = new Boolean
let icon_state = new Boolean
let input_password_login=document.querySelector('.input-password-login')
let input_password_register=document.querySelector('.input-password-register')

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

icon_login.addEventListener('click',()=>{
    if( icon_state==true){
        icon_login.src=('assets/images/icon-on.png')
        icon_state=false
        input_password_login.setAttribute('type','text')
    }

    else if(icon_state==false){
        icon_login.src=('assets/images/icon-off.png')
        icon_state=true
        input_password_login.setAttribute('type','password')
    }
})

icon_register.addEventListener('click',()=>{
    if( icon_state==true){
        icon_register.src=('assets/images/icon-on.png')
        icon_state=false
        input_password_register.setAttribute('type','text')
    }

    else if(icon_state==false){
        icon_register.src=('assets/images/icon-off.png')
        icon_state=true
        input_password_register.setAttribute('type','password')
    }
})




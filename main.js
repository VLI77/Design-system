let button_register = document.querySelector('.register-nav')
let button_login = document.querySelector('.login-nav')
let border = document.querySelector('.login-nav')
let login = document.querySelector('.login')
let register = document.querySelector('.register')
button_register.addEventListener("click",change)
button_login.addEventListener("click",change2)

let icon_login = document.querySelectorAll('.icon-password')
let state = new Boolean
let icon_state = new Boolean
let icon_valid= document.querySelectorAll('.icon-valid')
let icon_error= document.querySelectorAll('.icon-error')
let input_password=document.querySelectorAll('.input-password')
let input_username = document.querySelectorAll('.username')
let input_mail = document.querySelector('.mail')







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

 
input_username.forEach((input_username) => {
    input_username.addEventListener('keydown',()=>{

        if(input_username.value.length<7){
            input_username.style.borderColor="red"
            input_username.style.color="red"
            icon_error.forEach((icon_error) => {
                icon_error.style.display="block"
            });
            icon_valid.forEach((icon_valid) => {
                icon_valid.style.display="none"
            });
         }
        
         else{
            input_username.style.borderColor="green"
            input_username.style.color="green"
            icon_error.forEach((icon_error) => {
                icon_error.style.display="none"
            });
            icon_valid.forEach((icon_valid) => {
                icon_valid.style.display="block"
            });
         } 
    
})
});

//     input_mail.addEventListener('keydown',()=>{

//         if(input_mail.value.length<7){
//             input_mail.style.borderColor="red"
//             input_mail.style.color="red"
//             icon_error.forEach((icon_error) => {
//                 icon_error.style.display="block"
//             });
//             icon_valid.forEach((icon_valid) => {
//                 icon_valid.style.display="none"
//             });
//          }
        
//          else{
//             input_mail.style.borderColor="green"
//             input_mail.style.color="green"
//             icon_error.forEach((icon_error) => {
//                 icon_error.style.display="none"
//             });
//             icon_valid.forEach((icon_valid) => {
//                 icon_valid.style.display="block"
//             });
//          } 
    
// });
 




icon_login.forEach((icon_login) => {
    icon_login.addEventListener('click',()=>{
        if( icon_state==true){
            icon_login.src=('assets/images/icon-on.png')
            icon_state=false
            input_password.forEach((input_password)=>{
                input_password.setAttribute('type','text')
            })
        }
    
        else if(icon_state==false){
            icon_login.src=('assets/images/icon-off.png')
            icon_state=true
            input_password.forEach((input_password)=>{
                input_password.setAttribute('type','password')
            })        }
    })
    
});




let button = document.querySelector('.button')
let login = document.querySelector('.login')
let sign = document.querySelector('.sign')
button.addEventListener("click",change)

let state = new Boolean

 function change(){
    if(state == false){
        state = true
        login.style.display = "none";
        sign.style.display = "block";
    }
    else if (state == true){
        state = false
        login.style.display = "block";
        sign.style.display = "none";  
    }
}



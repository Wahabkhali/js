
let btn = document.querySelector(".btn-2");
function generateStrongPassword(){
    event.preventDefault();
    let input = document.getElementById("password")
    let spacial_char = "!@#$%^&*()_+[]{}|"
    let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';      
    let lowercase = 'abcdefghijklmnopqrstuvwxyz';
    let digits = '0123456789';    
    let allChars = spacial_char + uppercase + lowercase + digits 
    let password = "";
        for(let i = password.length; i < 8; i++){
            password += allChars[Math.floor(Math.random() * allChars.length)];
             
                    }
              
               input.value = password
            
               btn.addEventListener("click",function(){
                event.preventDefault();
                   input.select();
                   document.execCommand("copy")
                   btn.innerHTML = "copied !"
                   setTimeout(() =>{
                    btn.innerHTML = "Copy"
                   },1000)
                })
               
}   

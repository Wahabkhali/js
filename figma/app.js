function login(){
event.preventDefault();
let dbEmail = "wahabq307@gmail.com"
let dbpassword = "123456"
let userEmail = document.getElementById("exampleInputEmail1")
let userPassword = document.getElementById("exampleInputPassword1")
if (userEmail.value === dbEmail)
 {

}
else{
   alert( "Incorrect Email")
}
if(userPassword.value.length < 6){

    alert("your password must 6 letters")
}
if(userPassword.value === dbpassword)
{
 window.location.href = "./new.html"
}


else{
  alert ( "Incorrect Password")
}

}
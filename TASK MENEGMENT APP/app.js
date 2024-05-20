function login(){
event.preventDefault();
let dbEmail = "example307@gmail.com"
let dbpassword = "123456"
let userEmail = document.getElementById("exampleInputEmail1")
let userPassword = document.getElementById("exampleInputPassword1")
if(userEmail.value === ""){
  alert("❗ Please Fill Out This Field")
}
else if(userPassword.value === ""){
  alert("❗ Please Fill Out This Field")
}
else if(userPassword.value.length < 6){

    alert("your password must 6 letters")
}
else if(userPassword.value !== dbpassword)
{
  alert ( "Incorrect Password")
}
else if(userEmail.value !== dbEmail)
  {
    alert ( "Incorrect Email")
  }
if(userEmail.value === dbEmail && userPassword.value === dbpassword)
{ window.location.href = "./new.html"}
}

function input(){
  
  
  event.preventDefault();
  let empty = "❗ Please Fill Out This Field"
  let Email = document.getElementById("exampleInputEmail");
  let password = document.getElementById("exampleInputPassword");
  let para  = document.getElementById("error");
  let task_value = document.getElementById("task_value")
  let task_detail = document.getElementById("task_detail")
  let task_detail_2 = document.getElementById("task_detail-2")
  let strong = document.getElementById("strong")
  let strong_1 = document.getElementById("strong-1")
  let time = document.getElementById("time")
  let all_task = document.getElementById("all-task")

if(Email.value === ""){
  para.innerText = empty
}
else if(password.value === ""){
  para.innerText = empty
}
else{
  time.innerText = new Date().toLocaleString();
  all_task.innerText = "All Task"
  para.innerText = "";
  task_value.innerText = Email.value 
  task_detail.innerText = password.value
  task_detail_2.innerText = password.value
  strong.innerText = "✅"
  strong_1.innerText = "✅"
  Email.value = "";
  password.value = "";
}


  }

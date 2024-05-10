// CHAPTER 9-11

//USER INPUT & CONDITIONAL STATEMENT

// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// let userinput = prompt("enter city name");
// if(userinput === "karachi"){
//     document.write("“Welcome to city of lights”")
// }

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// let userinput = prompt("enter your gender");
// if(userinput === 'male'){
//     document.write("Good Morning Sir")
// }
// else if (userinput === "female"){
//     document.write("Good Morning Maam")
// }

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// let user = prompt("color of traffic signal");
// if(user === "red"){
//     document.write("Must Stop")
// }
// else if(user === 'yellow'){
//     document.write("Ready to Move")
// }
// else if (user === "green"){
//     document.write("Move")
// }

// 4. Write a program to take input remaining fuel in car (in
//     litres) from user. If the current fuel is less than 0.25litres,
//     show the message “Please refill the fuel in your car”

// let user = prompt("Remaining fuel in the car");
// if(user < 0.25){
//     alert("“Please refill the fuel in your car”")
// }
// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
//  var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
//  var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
//  var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
//  if("car" < "cat"){
// alert("car is smaller than cat");
// }
// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// let user_mark = +prompt("ENTER A TOTAL MARKS")
// let obtained_marks = +prompt("ENTER A OBTAINED MARKS")
// let percentage = ( obtained_marks / user_mark * 100)
// if ( percentage >= 80){
// document.write(`TOTAL MARKS:${user_mark} <br/> OBTAINED MARKS:${obtained_marks} <br/> PECENTAGE: ${percentage}% <br/> GRADE: A ONE <br/> REMARK:EXELLENT`)
// }else if (percentage >= 70){
//     document.write(`TOTAL MARKS:${user_mark} <br/> OBTAINED MARKS:${obtained_marks} <br/> PECENTAGE: ${percentage}% <br/> GRADE: A <br/> REMARK:GOOD`)
// }
// else if (percentage >= 60){
//     document.write(`TOTAL MARKS:${user_mark} <br/> OBTAINED MARKS:${obtained_marks} <br/> PECENTAGE: ${percentage }% <br/> GRADE: B <br/> REMARK:YOU NEED TO IMPROVE`)
// }
// else if (percentage <60){
//     document.write(`TOTAL MARKS:${user_mark} <br/> OBTAINED MARKS:${obtained_marks} <br/> PECENTAGE: ${percentage }% <br/> GRADE: FAIL <br/> REMARK:SORRY`)
// }

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// let number = 4;
// let user = +prompt("GUESS SECRET NUMBER");
// if(user === number){
//     alert("“Bingo! Correct answer”");
// }
// else if(user === ++number){
//     alert("“Close enough to the correct answer”")
// }

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// let user = +prompt("ENTER A NUMBER");
// if(user % 3 === 0){
//     alert("number is divisible by 3")
// }

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// let user = +prompt("enter a number");
// if(user % 2 === 0 ){
//     alert("is even number")
// }
// else{alert("is odd number")}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// let userinput = +prompt("ENTER A TEMPERATURE")
// if(userinput > 40){
//     alert("“It is too hot outside.”")
// }
// else if (userinput > 30){
//     alert("“The Weather today is Normal.”")
// }
// else if (userinput > 20){
//     alert("“Today's Weather is cool.”")
// }
// else if (userinput > 10){
//     alert("“OMG! Today’s weather is so Cool.”")
// }

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

let user_first_num = +prompt("enter a first number");
let Operation = +prompt("ENTER A OPERATION (+, -, *, /, %)")
let user_second_num = +prompt("enter a second number");
if(Operation === '+'){
alert(user_first_num + user_second_num);
}
else if (Operation === "-"){
    alert(user_first_num - user_second_num);
}
else if (Operation === "*"){
    alert(user_first_num * user_second_num);
}
else if (Operation === "/"){
    alert(user_first_num / user_second_num);
}
else if (Operation === "%"){
    alert(user_first_num % user_second_num);
}
else{alert("invalid number")}
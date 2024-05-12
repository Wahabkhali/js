//CHAPTER 25-30

//                    MATH METHODS



// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// let userInput = +prompt("ENTER A POSITIVE INTEGER")
// if (isNaN(userInput) || userInput <= 0) {
//     alert("Please enter a valid positive integer!");
// }
// else{

// document.write(`number :${userInput} <br/>`);
// let round = Math.round(  userInput );
// document.write(`round of value : ${ round} <br/>`);
// let floor = Math.floor(userInput);
// document.write(`Floor of value:${ floor} <br/>`);
// let ciel = Math.ceil(userInput);
// document.write(`Ciel of value:${ ciel} <br/>`);}

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// let userInput = +prompt("ENTER A POSITIVE INTEGER")
// if (isNaN(userInput) || userInput >= 0) {
//     alert("Please enter a valid negetive integer!");
// }
// else{

// document.write(`number :${userInput} <br/>`);
// let round = Math.round(  userInput );
// document.write(`round of value : ${ round} <br/>`);
// let floor = Math.floor(userInput);
// document.write(`Floor of value:${ floor} <br/>`);
// let ciel = Math.ceil(userInput);
// document.write(`Ciel of value:${ ciel} <br/>`);}

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5;

// let userInput = +prompt("ENTER A NUMBER");
// if(isNaN(userInput) || userInput >= 0){
//     alert("Please enter a valid negetive integer!");
// }
// else{let absoluteValue = Math.abs(userInput);
//     document.write(`Absolute value of ${userInput} is ${absoluteValue}`);}

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// function dice(){
//     let dice = Math.floor(Math.random() * 6 + 1);

//     let dicevalue = document.getElementById("diceroll");
//     dicevalue.innerText = dice


//}

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// function TOSS(){
//     let arr = ["HEAD","TAIL"];
//         let dice =  Math.random() * arr.length;
//         let floor = Math.floor(dice)
//         let round = arr[floor]
//         let dicevalue = document.getElementById("toss");
//         dicevalue.innerText = round;
    
    
//     }


// 6. Write a program that shows a random number between 1
// and 100 in your browser.

// function randomNum(){
   
//             let random =  Math.random() * 100 + 1;
//             let floor = Math.floor(random) 
    
//             let dicevalue = document.getElementById("random");
//             dicevalue.innerText = floor;
        
        
//         }
    
// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// let userInput = prompt("Enter your weight");
// let weight = userInput.replaceAll(/[^\d.]/g, '').toLowerCase();
// document.write("<h2>Weight:</h2>");
// document.write("<p>Your weight is: " + weight + " kgs</p>");
            
// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// let secretNum = (4);
// let userInput = +prompt("GUESS A NUMBER BETWEEN 1 TO 10");
// if(userInput === 4){
//     Swal.fire({
//         title: "congratulation your Guess number is right",
//         width: 600,
//         padding: "3em",
//         color: "#716add",
//         background: "#fff url(/images/trees.png)",
//         backdrop: `
//           rgba(0,0,123,0.4)
//           url("/images/nyan-cat.gif")
//           left top
//           no-repeat
//         `
//       });
// }

// else{
//     Swal.fire({
//         title: "NO! ITS NOT RIGHT TRY AGAIN!",
//         showClass: {
//           popup: `
//             animate__animated
//             animate__fadeInUp
//             animate__faster
//           `
//         },
//         hideClass: {
//           popup: `
//             animate__animated
//             animate__fadeOutDown
//             animate__faster
//           `
//         }
//       });
// }
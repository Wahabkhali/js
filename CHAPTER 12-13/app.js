// CHAPTER 12-13

// IF...ELSE & ELSE IF STATEMENT,
// TESTING SET OF CONDITIONS

// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// let userinput = +prompt("enter your value");
// if(userinput === Number){
//     document.write(`${userinput} is a number`)
// }
// else if (userinput >= 65 && userinput <= 90){
//     document.write(`${userinput} is uppercase`)
// }
// else if (userinput >= 97 && userinput <= 122 ){
//     document.write(`${userinput} is lower case latter`)
// }
// else{document.write(`${userinput} is not a number or latter`)
// }

// let userinput = +prompt("enter first number");
// let userinput_2 = +prompt("enter second value");
// if(userinput > userinput_2){
//     document.write(`${userinput} is larger`);
// }
// else if (userinput_2 > userinput){
//     document.write(`${userinput_2} is larger`);
// }
// else{document.write(`both number are equal`)

// };

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// let userinput = +prompt("enter your value");
// if(userinput === true){
//     document.write("is positive");
// }
// else if (userinput === false){
//     document.write("is negetive");
// }
// else if (userinput === 0){
//     document.write('is zero');
// }
// else{document.write("invalid value")}

// 4. Write a program that takes a character (i.e. string of
//     length 1) and returns true if it is a vowel, false otherwise

// let character = prompt("Enter a character:");
// if (character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u') {
//     document.write("its vowel")
// } else {
//    document.write("its not a vowel")
// }
// if (character.length === 1) {
// document.write("Is '" + userInput + "' a vowel? " + isVowel(userInput));
// } else {
// document.write("Please enter only one character.");
// }

// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

// let db_password = "123456"
// let userinput = prompt("Enter a pssword");
// if(userinput === ""){
//     alert("Enter a Password")
// }
// else if(userinput === db_password){
//     document.write(" “Correct! The password you entered matches the original password”")
// }
// else{alert("Incorrect password")}

// 6. This if/else statement does not work. Try to fix it:
// var greeting ();
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else{
// greeting = "Good evening";
// }

// greeting ("good day")

// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements

// function convertTo12HourClock(time) {
//     let hour = parseInt(time.substring(0, 2));
//     let minute = parseInt(time.substring(2));
//     let period;

//     if (hour >= 0 && hour < 12) {
//         period = "AM";
//         if (hour === 0) {
//             hour = 12; // Convert 0 to 12 for 12:00 AM
//         }
//     } else if (hour >= 12 && hour < 24) {
//         period = "PM";
//         if (hour > 12) {
//             hour -= 12; // Convert 24-hour time to 12-hour time
//         }
//     } else {
//         return "Invalid time format. Please enter time in 24-hour clock format.";
//     }

//     return "Time in 12-hour clock format: " + hour + ":" + padZero(minute) + " " + period;
// }
// function padZero(num) {
//     return (num < 10 ? '0' : '') + num;
// }
// let userInput = prompt("Enter time in 24-hour clock format (e.g., 1900):");
// if (userInput.length === 4) {
//     Swal.fire({
//         title: convertTo12HourClock(userInput),
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
// } else {
//     Swal.fire({
//         title: "Please enter time in 24-hour clock format (e.g., 1900).",
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



let user = +prompt("enter a time");
if(user >= "0000" && user < 1200){
    Swal.fire({
        title: "GOOD MORNING",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
}
else if(user >= 1200 && user < 1700){
    Swal.fire({
        title: "GOOD AFTERNOON",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
}
else if (user >= 1700 && user < 2100){
    Swal.fire({
        title: "GOOD EVENING",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
}
else if (user >= 2100 && user <= 2359){
    Swal.fire({
        title: "GOOD NIGHT",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
}
 else if (userInput.length === 4) {
        Swal.fire({
            title: convertTo12HourClock(user),
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
    } else {
        Swal.fire({
            title: "Please enter time in 24-hour clock format (e.g., 1900).",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
    }
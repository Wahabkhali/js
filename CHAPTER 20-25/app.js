//CHAPTER 20-25

//                    STRING METHODS

// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

// let fullName = ("");
// let userfirstname = prompt("Enter your first name").toLocaleUpperCase();
// let usersecondname = prompt("Enter your last name").toLocaleUpperCase();
// fullName = userfirstname + usersecondname;
// document.write(`WELCOME ${fullName} HAVE A GOOD DAY`);

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

// let user = prompt("ENTER YOUR MOBILE MODEL").toUpperCase();
// document.write(`MY FAVORITE PHONE IS:${user} <br/> LENGHT OF STRING:${user.length}`);

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

// let STRING = "PAKISTANI"
// document.write(`STRING : ${STRING} <br/> INDEX OF N: ${STRING.indexOf("N")}`);

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

// let STRING = "Hello World"
// document.write(`STRING:${STRING} <br/> LAST INDEX OF l: ${STRING.lastIndexOf("l")}`)

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

// let STRING = "PAKISTANI"
// document.write(`STRING : ${STRING} <br/> CHARACTER AT INDEX 3: ${STRING.charAt(3)}`);

// 6. Repeat Q1 using string concat() method.

// let fullName = ("");
// let userfirstname = prompt("Enter your first name").toLocaleUpperCase();
// let usersecondname = prompt("Enter your last name").toLocaleUpperCase();
// fullName = userfirstname.concat(" ",  (usersecondname));
// document.write(`WELCOME ${fullName} HAVE A GOOD DAY`);

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

// let city = "Hyderabad";
// let newCity = city.replace("Hyder", "Islam");
// document.write("Original city name: " + city + "<br>");
// document.write("Modified city name: " + newCity);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

// let message = "Ali and Sami are best friends. They play cricket and football together.";
// let replace = message.replaceAll("and","&");
// document.write("MEASSEAGE: " + message + "<br>");
//  document.write("Modified MEASSEAGE: " + replace);

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

// let string = "472"
// document.write(`VALUE ${string} <br/> TYPE ${typeof(string)} <br/>`);
// document.write(`VALUE ${string} <br/> TYPE ${typeof(+string)}`);

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.

// let userInput = prompt("Enter word to convert uppercase").toUpperCase();
// document.write(userInput)

// 11. Write a program that takes user input. Convert and
// show the input in title case.

// let userInput = prompt("Enter a string:");
// let words = userInput.toLowerCase().split(" ");
// let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
// let titleCaseInput = capitalizedWords.join(" ");
// document.write("TITLE CASE: " + titleCaseInput);

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

// var num = 35.36 ;
// str = num.toString().replace(".","");
// document.write(num);
// document.write(str)
// document.write(typeof(str));

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// let username = prompt("Enter your username:");
// let specialSymbols = /[@.,!]/;
// if (specialSymbols.test(username)) {
//     alert("Username contains special symbols. Please enter a valid username.");
// } else {
//     alert("Username is valid: " + username);
// }

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:


// let item = prompt("Welcome to Wahab's Bakery what do you want to order sir").toLowerCase();
// let A = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];
// if(item === A [0]){
//     alert("cake is Available at Index 0 ")
// }else if(item === A[1]){
//     alert("apple pie is Available at Index 1")
// }else if (item === A[2]){
//     alert("Cookies is Available at Index 2")
// }
// else if (item === A[3]){
//     alert("Chips is Available at Index 3")
// }
// else if (item === A[2]){
//     alert("patties is Available at Index 4")
// }
// else (
//     document.write(`we are sorry ${item} is not available`)
// )

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// let password = prompt("Enter your password:");
// let alphabetRegex = /[a-zA-Z]/;
// let numberRegex = /[0-9]/;
// if (
//     password.length < 6 ||                   
//     !alphabetRegex.test(password) ||          
//     !numberRegex.test(password) ||            
//     /^[0-9]/.test(password)                   
// ) {
//     alert("Password does not meet the requirements. Please enter a valid password.");
// } else {
//     alert("Password is valid.");
// }

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var university = "University of Karachi";
// let arr = university.split("")
// document.write(arr.join(","))

//17. Write a program to display the last character of a user input.

let userInput = prompt("Enter a string:");
let lastIndex = userInput.length - 1;
let lastCharacter = userInput[lastIndex];

document.write("Last index of input:", lastIndex);
document.write("Last character of input:", lastCharacter);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

// let para = "The quick brown fox jumps over the lazy dog";
// let search = para.split(" the").length;
// document.write(search);
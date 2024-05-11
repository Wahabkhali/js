//chapter 6-9

// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// var a = 10;
// document.write(`The value of a is ${a} <br/>`);
// document.write(`Now The value of ++a is ${++a} <br/>`);
// document.write(`The value of a++ is ${a++} <br/>`);
// document.write(`Now The value of --a is ${--a} <br/>`);
// document.write(`The value of a-- is ${a--} <br/>`);

// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;

// var a = 2;
// document.write(`a is ${a} <br/>`);
// var b = 1;
// document.write(`b is ${b} <br/>`);
// var result = --a;
// document.write(`result is --a = ${result} <br/>`);
// result = --a - --b;
// document.write(`result is --a - --b = ${result} <br/>`);
// result = --a - --b + ++b;
// document.write(`result is --a - --b + ++b = ${result} <br/>`);
// result = --a - --b + ++b + b--;
// document.write(`result is  --a - --b + ++b + b-- = ${result} <br/>`);

// 3. Write a program that takes input a name from user &
// greet the user.

// var input = prompt("Enter your name");
// var greet = " hello " + input + " Welcome! ";
// document.write(greet) ;

// 5.Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default.

// var userinput = +prompt("ENTER TABLE NUM",5); 
// document.write(`${userinput} x 1 = ${userinput * 1} <br/>`);
// document.write(`${userinput} x 2 = ${userinput * 2}<br/>`);
// document.write(`${userinput} x 3 = ${userinput * 3}<br/>`);
// document.write(`${userinput} x 4 = ${userinput * 4}<br/>`);
// document.write(`${userinput} x 5 = ${userinput * 5}<br/>`);
// document.write(`${userinput} x 6 = ${userinput * 6}<br/>`);
// document.write(`${userinput} x 7 = ${userinput * 7}<br/>`);
// document.write(`${userinput} x 8 = ${userinput * 8}<br/>`);
// document.write(`${userinput} x 9 = ${userinput * 9}<br/>`);
// document.write(`${userinput} x 10 = ${userinput * 10}<br/>`);

// 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.
// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// var subject = "urdu";
// var subject_2 = "english";
// var subject_3 = "math";
// document.write(`${subject} <br/> ${subject_2} <br/> ${subject_3}`);
// var number = 100;
// var number_2 = 100;
// var number_3 = 100;
// document.write(`${number} <br/> ${number_2} <br/> ${number_3}`);
// var obtained_mark = 54; 
// var obtained_2 = 54;
// var obtained_3 = 48;
// document.write(`${obtained_mark} <br/> ${obtained_2} <br/> ${obtained_3}`);
// var obtained_mark = "54%"; 
// var obtained_2 = "54%";
// var obtained_3 = "48%";
// document.write(`${obtained_mark} <br/> ${obtained_2} <br/> ${obtained_3}`);
// document.write(`${number + number_2 + number_3}      ${obtained_mark + obtained_2 + obtained_3 / obtained_mark,obtained_2,obtained_3}  `)

//CHAPTER 14-16

//                                    ARRAYS


// 1. Declare an empty array using JS literal notation to store
// student names in future.

// let student_name = [];

// 2. Declare an empty array using JS object notation to store
// student names in future.

// let student_name = new Array ();;

// 3. Declare and initialize a strings array.

// let stringArr = ["banana","apple","pineapple","kivi"];

// 4. Declare and initialize a numbers array.

// let numbersArr = [1,2,3,4,5];

// 5. Declare and initialize a boolean array.

// let booleanArr = [true,false];

// 6. Declare and initialize a mixed array.

// let mixedArr = ["apple",32,true];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

// let qualifications = [ "SSC", "HSC", "BCS", "BS", "BCOM", "MS"," M. Phil", "PhD"];
// for (let i = 0; i < qualifications.length;i++){
// document.write(`${qualifications[i]} <br/>`)
// }

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:

// let studentName = ["wahab","muhib","waqar"];
// let score_of_student = [480,230.,340];
// let total_score = [500];
// for (let i = 0; i <studentName.length; i++){
// document.write(`score of  ${studentName [i]} is ${score_of_student[i]} and persentage is ${score_of_student[i] / 500 * 100}% <br/> `);
// }

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

//  let colorName = ["RED","BLUE","GREEN"];
// document.write(`${colorName} <br/>`);
// let userinput = prompt("ENTER YOUR BEGINNING COLOR NAME")
// colorName.unshift(userinput.toUpperCase())
// document.write(`${colorName}<br/>` );
// let userInput = prompt ("ENTER YOUR END COLOR NAME")
// colorName.push(userInput.toUpperCase());
// document.write(`${colorName}<br/>`);
// colorName.unshift("orange","brown");
// document.write(`${colorName}<br/>`.toUpperCase());
// colorName.shift();
// document.write(`${colorName}<br/>`.toUpperCase());
// colorName.pop();
// document.write(`${colorName}<br/>`.toUpperCase());
// let userindex = prompt("ENTER YOUR INDEX NUM TO ADD COLOR")
// let usercolor = prompt ("which color add to index")
// colorName.splice(userindex,0,usercolor);
// document.write(`${colorName}<br/>`.toUpperCase());
// let userdelete = prompt(" WHICH INDEX YOU WANT TO DELETE")
// let userchoice = prompt("HOW MANY COLORS WANT TO DELETE")
// colorName.splice(userdelete,userchoice)
// document.write(`${colorName}<br/>`.toUpperCase());

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

//  let score_of_student = [320,230,480,120];
//  let shorArr = score_of_student.sort((a,b)=> a-b);
// document.write(shorArr)

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// let cityname = ["karachi","lahore","islamabad","queeta","peshawar"];
// console.log(cityname.slice(2,4))

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

// var arr = ["This","is","my","cat"];
// document.write(arr.join(" "));


// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// let FIOS = ["Keyboard","Mouse","Printer","Moniter"];
// document.write(FIOS);
// let fios = [];
// fios.unshift("moniter");
// fios.unshift("printer");
// fios.unshift("mouse");
// fios.unshift("keyboard");
// document.write(fios)

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)

// let LIFO = [];
// LIFO.push("keyboard");
// LIFO.push("mouse");
// LIFO.push("printer");
// LIFO.push("moniter");
// document.write(LIFO);
// document.write(LIFO.reverse())

// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method:
 
let phoneManufacturers =[ " apple","samsung","motorola","nokia","sony","haier "];
document.write("<select>");
for(let i = 0; i < phoneManufacturers.length; i++){
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}

document.write("<select/>")


// let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// // Generate dropdown/select menu using document.write() method
// document.write("<select>");
// document.write("<option value='' disabled selected>Select a manufacturer</option>");
// for (let i = 0; i < phoneManufacturers.length; i++) {
//     document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
// }
// document.write("</select>");
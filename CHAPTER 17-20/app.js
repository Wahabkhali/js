// CHAPTER 17-20

//                                     ARRAYS AND LOOP


// 1.Declare and initialize an empty multidimensional array.
// (Array of arrays)

// let Arr = [[123, 233],
// [ 121,234 ],[7658,464]
// ]
// document.write(Arr)

// 2.Declare and initialize a multidimensional array
// representing the following matrix:

// let Arr = [[0,1,2,3],
// [1,0,1,2],[2,1,0,1]]
// for(let i = 0; i <Arr.length; i++){
//     document.write(`${Arr [i]}  <br/>`);
// }

// 3. Write a program to print numeric counting from 1 to 10.

// for(let i = 0; i<=10; i++){
// document.write(`${i}<br/>`);
// }

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

// let userinput = +prompt("enter a number to show you table")
// let lenght = +prompt("enter your table lenght")
// for(let i = 1; i<=lenght; i++){
//     document.write(`${userinput} x ${i} = ${userinput*i} <br/>`);
// }

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

// let fruits = ["apple", "banana", 'mango', 'orange',
//     "strawberry"]
// for(let i = 0; i<fruits.length; i++){

//     document.write(`${fruits[i]}<br/>`)
// }

// 6. Generate the following series in your browser. See
// example output.

// COUNTING

// for(let i = 1; i<=10; i++){
    
//     document.write( ` ${i},`)
// }

// REVERSE COUNTING

// for(let i = 1; i<=10; i--){
    
//     document.write( ` ${i},`)
// }

// EVEN

// for(let i = 0; i<=10; i++){
//     document.write(`${i*2},`)
// }

// ODD

// for(let i = 0; i <=19; i++){
//     document.write(`${i+=1},`)
// }

// Series

// for(let i = 1; i <=10; i++){
//     document.write(`${i*2}k,`)
// }

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

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

// 8. Write a program to identify the largest number in the
// given array.
//  arr = [24, 53, 78, 91, 12];

// let Arr = [24,53,78,91,12];
// let largestnum = [Arr[0]];
// for(let i = 0; i<Arr.length; i++){
//     if (Arr[i] >largestnum ) {
//         largestnum = Arr [i];
//     }
// }
// document.write(`The largest number in array is ${largestnum}`);

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

// let Arr = [24,53,78,91,12];
// let smallnum = [Arr[0]];
// for(let i = 0; i < Arr.length; i++){
//     if (Arr[i] < smallnum ) {
//         smallnum = Arr [i];
//     }
// }
// document.write(`The small number in array is ${smallnum}`);

//10. Write a program to print multiples of 5 ranging 1 to 100.

for(let i = 1; i <=20; i++){
    document.write(`${5 * i} ${","}`)
}
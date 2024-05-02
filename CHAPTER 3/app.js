//1. Declare a variable called age & assign to it your age. Show
//your age in an alert box.

// var age = "20";
// alert("I am " + age + " year old ");

//2.Declare & initialize a variable to keep track of how many
//times a visitor has visited a web page. Show his/her
//number of visits on your web page. For example: “You
//have visited this site N times”.

// var visiterNumber = "14";
// alert("You have viseted this site " +  visiterNumber  + " times");

//3. Declare a variable called birthYear & assign to it your
//birth year. Show the following message in your browser:

// var birthyear = 2004
// document.write("my birthyear is " + birthyear);

// 4.A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var username = prompt("Enter your name");
var products = prompt("enter a product name");
var Quantity = +prompt("how many product order");

document.write(`${username} ORDERED ${Quantity} - ${products} on XYZ clothing store`)
